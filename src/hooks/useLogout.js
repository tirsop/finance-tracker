import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
// firebase imports
import { auth } from '../firebase/config'

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false) // if the component is unmounted (ex: user goes to another page) during the await, it will cause an error. For preventing that, we will "cancel" the operation.
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useContext(AuthContext)

  const logout = async () => {
    setError(null)
    setIsPending(true)
    try {
      await auth.signOut()
      dispatch({ type: 'LOGOUT' })
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


  return { error, isPending, logout }
}