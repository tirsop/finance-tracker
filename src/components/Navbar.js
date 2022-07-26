import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useLogout } from '../hooks/useLogout'
// styles
import styles from './Navbar.module.css'


export default function Navbar() {
  const { user } = useContext(AuthContext)
  const { logout } = useLogout()

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">
            myMoneyApp
          </Link>
        </li>
        <div className={styles['nav-flex']}>
          {!user && (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </>
          )}
          {user &&
            <>
              <li>Hello, {user.email.substring(0, user.email.indexOf('@'))}</li>
              <li><button className="btn" onClick={logout}>Logout</button></li>
            </>
          }
        </div>
      </ul>
    </nav>
  )
}
