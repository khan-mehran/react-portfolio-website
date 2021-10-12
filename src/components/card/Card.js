import React from 'react'
import styles from './card.module.css'

const Card = ({img}) => {
    // const img =['/images/abad.png','/images/list.png','/images/apri.png']
    return (
        // <div className={styles.portfolio_card}>
        //     <img src={img} />
        // </div>
        <div className={styles.portfolio_card}>
        <div>
            <img src={img} alt='cards'></img>
        </div>
        <div className={styles.overlay}>
            <div className={styles.overlay_content}>
                <h2>-Sed ut Perspiciatis</h2>
                <p>Branding, Web Design</p>
            </div>
        </div> 
    </div>
    )
}

export default Card
