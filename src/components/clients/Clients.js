import React from 'react'
import styles from './client.module.css'

const Clients = () => {
    return (
        <div className={styles.clients}>
            <div className='container'>
                <div className={styles.clients_heading}>
                            <h3>What My Client Says</h3>
                            <span></span>
                            <p>Lorem ipsum dolor sit amet, 
                                consectetur adipisicing elit, 
                                sed do eiusmod tempor incididunt 
                                ut labore et t enim ad minim veniam, 
                                quis nostrud exercitation.
                            </p>
                </div>
                <div className={styles.clients_wrapper}>
                    <div className={styles.clients_img}>
                        <img src={'/images/map.png'} alt='map' className={styles.map}/>
                        <div >
                            <img src={'/images/3.png'} alt='clients' className={styles.client_one}/>
                            <img src={'/images/1.png'} alt='clients' className={styles.client_two}/>
                            <img src={'/images/22.png'} alt='clients' className={styles.client_three}/>
                            <img src={'/images/2.png'} alt='clients' className={styles.client_four}/>
                            <img src={'/images/1.png'} alt='clients' className={styles.client_five}/>
                            <img src={'/images/3.png'} alt='clients' className={styles.client_six}/>
                        </div>
                    </div>
                    <div className={styles.clients_text}>
                        <p>
                        <img src={'/images/asset.png'} alt='quote' className={styles.upper_qoute} />
                        Sed ut perspiciatis unde omnis iste natus error 
                        sit voluptatem accusantium doloremque laudantium, 
                        totam rem aperiam, eaque ipsa quae ab illo inventore 
                        veritatis et quasi architecto beatae vitae dicta sunt 
                        is the most explicabo.<br/>
                        <img src={'/images/asset.png'} alt='quote' className={styles.lower_qoute}/>
                        </p>
                        <p className={styles.sara}>
                        <span>- Sara Smith</span>
                        <br/>
                        CEO ABC Company
                        </p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Clients
