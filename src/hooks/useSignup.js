import { useState } from 'react'
// firebase imports
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useSignup = () => {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const signup = async (email, password) => {
    setError(null)
    setIsPending(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      if (!userCredential) throw new Error('Could not complete the signup.')
      console.log(userCredential.user);
      setIsPending(false)
      setError(null)
    }
    catch (err) {
      console.log(err.message);
      setError(err.message)
      setIsPending(false)
    }
  }


  return { error, isPending, signup }
}