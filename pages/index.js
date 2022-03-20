import styles from '../styles/Home.module.css'
import SelectTip from '../components/select-tip'
import TipAmount from '../components/tipAmount'

export default function Home() {
  return (
    <div className={styles.container}>
      
        <title>Tip Calculator</title>
        <meta name="description" content="Tip Calculator next app" />        
      
        
      
        <h1 className={styles.title}>
            SPLI
        </h1>
        <h1 className={styles.title}>TTER</h1>
        <main className={styles.main}>

        <div >
          <h2 className={styles.h2}>Bill</h2>
          <input className={styles.input} placeholder="$ 142.55"></input>
        </div>
        <SelectTip></SelectTip>
       

        <div>
          <h2 className={styles.h2}>Number of People</h2>
          <input className={styles.input}></input>
        </div>
        <TipAmount></TipAmount>
                
      </main>      
    </div>
  )
}
