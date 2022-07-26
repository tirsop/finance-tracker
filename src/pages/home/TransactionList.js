
// import { useEffect } from 'react'
import { useFireStore } from '../../hooks/useFireStore'
// styles
import styles from './Home.module.css'

export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFireStore('transactions')

  let total = 0
  transactions.map(transaction => {
    const amount = parseInt(transaction.amount)
    return total += amount
  })



  return (
    <ul className={styles.transactions}>
      {transactions.map(transaction => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>¥ {transaction.amount}</p>
          <button onClick={() => deleteDocument(transaction.id)}>x</button>
        </li>
      ))}

      {transactions.length &&
        <li className={styles.total}>
          <p className={styles.name}>TOTAL: </p>
          <p className={styles.amount}>{total}</p>
        </li>
      }
    </ul>
  )
}
