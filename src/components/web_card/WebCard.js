import React from 'react'
import styles from './web.module.css'


const WebCard = ({img}) => {
    return (
        <div>
            <div className={styles.WebCard}>
            <img src={img} alt='web card' />
                <h3>Web Design</h3>
                <p>Get awesome design services <br/>
                    from inkyy.com</p>
            </div> 
        </div>
    )
}

export default WebCard
