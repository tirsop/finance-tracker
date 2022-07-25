import { useEffect, useRef, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export const useCollection = (fbCollection, _fbQuery) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  // if we pass an array as dependency of useRef, arrays will be seen as "different" by useEffect, and in every function call and it will re-render infinitely.
  const fbQuery = useRef(_fbQuery).current

  useEffect(() => {
    let ref = collection(db, fbCollection)

    if (fbQuery) {
      ref = query(ref, where(...fbQuery));
    }

    setIsPending(true)
    const unsub = onSnapshot(ref, (snapshot) => {
      if (snapshot.empty) {
        setError('No transactions to load.')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({ ...doc.data(), id: doc.id })
        })
        setData(results)
        setIsPending(false)
        setError(null)
      }
    }, (err) => {
      console.log(err);
      setError('We coundn\'t retrieve the data')
    })

    // unsuscribe on unmount
    return () => unsub()

  }, [fbCollection, fbQuery])

  return { data, isPending, error }
}