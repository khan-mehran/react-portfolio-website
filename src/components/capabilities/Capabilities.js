import React from 'react'
import WebCard from '../web_card/WebCard'
import styles from './cap.module.css'


const Capabilities = () => {
    
    return (
        
            <div className={styles.cap}>
                <div className='container'>
                    <div className={styles.cap_heading}>
                        <h3>My Capabilities</h3>
                        <span></span>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et t enim ad minim veniam, 
                            quis nostrud exercitation.</p>
                    </div>
                    <div className={styles.WebCard_wrapper}>
                        <div className={styles.WebCard}>
                            <WebCard img='/images/web.png' />
                            <WebCard img='/images/web.png' />
                            <WebCard img='/images/web.png' />
                        </div>  
                        <div className={styles.WebCard}>
                            <WebCard img='/images/web.png' />
                            <WebCard img='/images/web.png' />
                            <WebCard img='/images/web.png' />
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default Capabilities
