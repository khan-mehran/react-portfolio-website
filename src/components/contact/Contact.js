import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className='container'>
                <div className={styles.border}>

                </div>
                <div className={styles.heading}>
                    <h3>
                    Let’s Make Something<br/>
                    Great Together
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt <br/>
                    ut labore et t enim ad minim veniam, quis nostrud exercitation.
                    </p>
                </div>
                <div class={styles.form}>
                    <div className={styles.form_data}>
                        <input id={styles.input} type="text" placeholder="Name" />
                        <input id={styles.input} type="text" placeholder="Email" />
                    </div>
                    <div className={styles.form_data}>
                        <input id={styles.input} type="text" placeholder="Phone#" />
                        <input id={styles.input} type="text" placeholder="Budget" />
                    </div>
                    <div className={styles.form_data}>
                        <input id={styles.message} type="text" placeholder="Message" />
                        
                    </div>
                    <button>Hire Me</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
