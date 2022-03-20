import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tip Calculator</title>
        <meta name="description" content="Tip Calculator next app" />        
      </Head>

      
        <h1 className={styles.title}>
            SPLI{' '}TTER
        </h1>
        <main className={styles.main}>

        <div className={styles.bill}>
          <p className={styles.description}>Bill</p>
          <input></input>
        </div>
        
        <div>
          <h2>Select Tip %</h2>
          <p>5%</p>
          <p>10%</p>
          <p>15%</p>
          <p>25%</p>
          <p>50%</p>
          <p>Custom</p>
        </div>

        <div>
          <h2>Number of People</h2>
          <input></input>
        </div>
        
        <div className={styles.tipAmount}>
          <p>Tip Amount</p>
          <p>$ 4.27</p>
          <p>/ person</p>
          <p>Total</p>
          <p>$ 32.79</p>
          <p>/ Person</p>
          <button>RESET</button>
        </div>        
      </main>      
    </div>
  )
}
