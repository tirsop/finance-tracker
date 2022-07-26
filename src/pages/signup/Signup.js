import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import visibilityIcon from '../../assets/svg/visibilityIcon.svg'
// styles
import styles from './Signup.module.css'


export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Signup</h2>

      <label htmlFor="email">Email:</label>
      <input type="email"
        required
        id='email'
        // placeholder='example@gmail.com'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      // we set the email to whatever the user is typing by onChange. Also we set a value just in case we change this field from outside the input, so the input reflect that change too. So we have a 2 way binding and this is called a controlled input
      />

      <div>
        <label htmlFor="password">Password:</label>
        <input type={showPassword ? 'text' : 'password'}
          required
          id='password'
          // placeholder='somethingCompl1cated'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <img
          src={visibilityIcon}
          alt='show password'
          className={styles['showPassword']}
          onClick={() => setShowPassword((prevState) => !prevState)}
        />
      </div>


      {!isPending && <button className="btn">Signup</button>}
      {isPending && <button className='btn' disabled>...loading</button>}
      {error && <p>{error}</p>}

      <Link className={styles['login-link']} to="/login">Already have an account?</Link>

    </form>
  )
}
