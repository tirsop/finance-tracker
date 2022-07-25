import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
// components
import TransactionForm from './TransactionForm'
// styles
import styles from './Home.module.css'


export default function Home() {
  const { user } = useContext(AuthContext)

  return (
    <div className={styles.container}>
      <div className={styles.content}>

      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  )
}
