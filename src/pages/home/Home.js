import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { useCollection } from '../../hooks/useCollection'
// components
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'
import Spinner from '../../components/Spinner'
// styles
import styles from './Home.module.css'


export default function Home() {
  const { user } = useContext(AuthContext)
  const { data, isPending, error } = useCollection('transactions', ["uid", "==", user.uid])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {isPending && <Spinner />}
        {data && <TransactionList transactions={data} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  )
}
