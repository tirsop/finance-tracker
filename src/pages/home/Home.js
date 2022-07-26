import { Link } from 'react-router-dom'
// styles
import styles from './Home.module.css'



export default function Home() {
  return (
    <>
      <div className={styles.devices}>
        <img className='devide' src="/img/mac-mockup.jpg" alt="" />
        <img className='devide' src="/img/iphone-mockup.jpg" alt="" />
      </div>
      <Link className='btn-purple transactions-link' to="/transactions">Start tracking your expenses</Link>
    </>
  )
}
