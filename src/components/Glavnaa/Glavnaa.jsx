import React from 'react'
import styles from './glavnaa.module.css'
import { Cards } from '../Cards/Cards'
const Glavnaa = () => {
  return (
    <div className={styles.conteiner}>
        <h1 className={styles.title}>Ваши задачи</h1>
        <div className={styles.blok_card}>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </div>
    </div>
  )
}

export default Glavnaa