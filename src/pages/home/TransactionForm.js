import { useEffect, useState } from "react"
import { useFireStore } from "../../hooks/useFireStore"

export default function TransactionForm({ uid }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const { addDocument, response } = useFireStore('transactions')

  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument({
      uid,
      name,
      amount
    });
  }

  // reset the form fields when the add_response change to success
  useEffect(() => {
    if (response.success) {
      setName('')
      setAmount('')
    }
  }, [response.success])

  return (
    <>
      <h3>New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name} />
        </label>

        <label>
          <span>Amount (¥):</span>
          <input type="text"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount} />
        </label>

        <button>Add</button>
      </form>
    </>
  )
}
