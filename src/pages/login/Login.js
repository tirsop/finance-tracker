import { useState } from 'react'

// styles
import styles from './Login.module.css'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form className={styles['login-form']}>
      <h2>Login</h2>

      <label htmlFor="email">Email:</label>
      <input type="text" id='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      // we set the email to whatever the user is typing by onChange. Also we set a value just in case we change this field from outside the input, so the input reflect that change too. So we have a 2 way binding and this is called a controlled input
      />

      <label htmlFor="password">Password:</label>
      <input type="password" id='password'
      />

      <button className="btn">Login</button>
    </form>
  )
}
