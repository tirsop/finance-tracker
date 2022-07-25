
import { useFireStore } from '../../hooks/useFireStore'
// styles
import styles from './Home.module.css'

export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFireStore('transactions')

  return (
    <ul className={styles.transactions}>
      {transactions.map(transaction => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>¥ {transaction.amount}</p>
          <button onClick={() => deleteDocument(transaction.id)}>x</button>
        </li>
      ))}
    </ul>
  )
}
