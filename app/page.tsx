import Image from 'next/image'
import styles from './page.module.css'
import BelajarApi from './pages/BelajarApi'



export default function Home() {
  return (
    <main className={styles.main}>
      <BelajarApi/>
    </main>
  )
}
