import styles from '../styles/Home.module.css'

export default function SelectTip(){
    return  (<div>
    <h2 className={styles.h2}>Select Tip %</h2>
    <div className={styles.tip}>
      <p className={styles.p}>5%</p>
      <p className={styles.p}>10%</p>
      <p className={styles.p}>15%</p>
      <p className={styles.p}>25%</p>
      <p className={styles.p}>50%</p>
      <input className={styles.p} placeholder="Custom" type="number"></input>
    </div>
    
  </div>)
}

