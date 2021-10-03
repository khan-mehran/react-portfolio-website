import React from 'react'
import styles from './about.module.css'

const About = () => {
    return (
        <div className={styles.about} id={styles.abou_me}>
            <div className='container'>
                <div className={styles.about_wrapper}>
                        <div className={styles.about_content}>
                            <div className={styles.h2_wrapper}>
                                <div className={styles.h2_content}>
                                    <h2>About Me</h2>
                                </div>
                                <div className={styles.h2_border}>
                                    <p>___________________________________</p>
                                </div>
                            </div>
                           <div className={styles.about_para}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat
                                <br/><br/>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse 
                                cillum dolore eu fugiat nulla pariatur.</p>
                                <button>Download CV</button>
                           </div>
                            
                        </div>
                        <div className={styles.img_wrapper}>
                            <img src={'/images/about.png'} className={styles.about_img} />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default About
