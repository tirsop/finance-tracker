import { useState } from 'react'
// styles
import styles from './Signup.module.css'


export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName);
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Signup</h2>

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

      <label htmlFor="displayName">Display name:</label>
      <input type="text" id='displayName'
        onChange={(e) => setDisplayName(e.target.value)}
        value={displayName}
      />

      <button className="btn">Signup</button>
    </form>
  )
}
