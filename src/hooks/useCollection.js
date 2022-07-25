import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (fbCollection) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ref = collection(db, fbCollection)

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

  }, [fbCollection])

  return { data, isPending, error }
}