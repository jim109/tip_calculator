import styles from '../styles/Home.module.css'

export default function TipAmount(){
    return(
        <div className={styles.tipAmount}>

          <div className={styles.tip2}> 
            <p className={styles.one}>Tip Amount</p>
            <p className={styles.two}>/ person</p>
            <p className={styles.three}>$ 4.27</p>
            <p className={styles.four}>Total</p>
            <p className={styles.five}>$ 32.79</p>
            <p className={styles.six}>/ Person</p>
          </div>    
                        
          <button >RESET</button>
        </div>
    )
}