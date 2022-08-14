import { Link } from 'react-router-dom'
// styles
import styles from './Home.module.css'



export default function Home() {
  return (
    <div className={styles.home}>
      <img className='' src="/img/iphone-mockup.png" alt="" />
      <Link className='btn-purple transactions-link' to="/transactions">Start tracking your expenses</Link>
    </div>
  )
}
