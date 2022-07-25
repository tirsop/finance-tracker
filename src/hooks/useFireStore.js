import { useReducer, useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { addDoc } from 'firebase/firestore'


let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { document: null, isPending: true, error: null, success: false }
    case 'ADDED_DOCUMENT':
      return { document: action.payload, isPending: false, error: null, success: true }
    case 'ERROR':
      return { document: null, isPending: false, error: action.payload, success: false }

    default:
      return state
  }
}

export const useFireStore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  const ref = collection(db, collection)

  // only dispatch (update state) if request is not cancelled (go to another page while loading)
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' })
    try {
      const addedDocument = await addDoc(ref, doc)
      dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })
    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
    }
  }

  const deleteDocument = async (id) => {

  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])


  return { addDocument, deleteDocument, response }
}
