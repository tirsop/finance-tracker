import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
// firebase imports
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false) // if the component is unmounted (ex: user goes to another page) during the await, it will cause an error. For preventing that, we will "cancel" the operation.
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useContext(AuthContext)

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      dispatch({ type: 'LOGIN', payload: userCredential.user })
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


  return { error, isPending, login }
}