import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
// firebase imports
import { auth } from '../firebase/config'

export const useLogout = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useContext(AuthContext)

  const logout = async () => {
    setError(null)
    setIsPending(true)
    try {
      await auth.signOut()
      dispatch({ type: 'LOGOUT' })
      setIsPending(false)
      setError(null)
    }
    catch (err) {
      console.log(err.message);
      setError(err.message)
      setIsPending(false)
    }
  }


  return { error, isPending, logout }
}