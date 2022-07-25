import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'

// styles
import styles from './Login.module.css'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isPending, error } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>Login</h2>

      <label htmlFor="email">Email:</label>
      <input type="text" id='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      // we set the email to whatever the user is typing by onChange. Also we set a value just in case we change this field from outside the input, so the input reflect that change too. So we have a 2 way binding and this is called a controlled input
      />

      <label htmlFor="password">Password:</label>
      <input type="password" id='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      {!isPending && <button className="btn">Login</button>}
      {isPending && <button className='btn' disabled>...loading</button>}
      {error && <p>{error}</p>}
      <Link className={styles['signup-link']} to="/signup">or create a new account.</Link>
    </form>
  )
}
