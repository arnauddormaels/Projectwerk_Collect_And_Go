import React from 'react'
import styles from '../css/Customer.module.css'

const Banner = () => {
  return (
    <div>
        <div className={styles.banner}>
        <img src="https://jenzvandevelde-images-host.onrender.com/banner2.webp" alt="Welkom bij onze website" />
        <div className={styles['text-container']}>
          <h1 className={styles.titelbanner}>Snel, Gezond en Lekker Koken</h1>
          <p className={styles.titelslogan}>Welkom op onze website</p>
          <button className={styles.buttonleesmeer}>Lees meer</button>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.imagerow}>
          <p className={styles.themaTitel}>Aanbevolen</p>
        </div>
      </div>
    </div>
  )
}

export default Banner