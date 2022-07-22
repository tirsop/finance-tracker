import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
// firebase imports
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false) // if the component is unmounted (ex: user goes to another page) during the await, it will cause an error. For preventing that, we will "cancel" the operation.
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const { dispatch } = useContext(AuthContext)

  const signup = async (email, password) => {
    setError(null)
    setIsPending(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      if (!userCredential) throw new Error('Could not complete the signup.')
      console.log(userCredential.user);
      dispatch({ type: 'LOGIN', payload: userCredential.user })   // dispatch login action
      // update states
      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    }
    catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])


  return { error, isPending, signup }
}