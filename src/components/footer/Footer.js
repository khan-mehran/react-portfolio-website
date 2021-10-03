import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className='container'>
            <div className={styles.footer_logo}>
                    <img src={'/images/logo.png'} className={styles.logo} />
                </div>
                <div className={styles.footer_nav}>
                    <nav>
                        <ul>
                            <li>
                                <Link to='#'>About | </Link> 
                            </li>
                            <li>
                                <Link to='#'>Portfolio | </Link>
                            </li>
                            <li>
                                <Link>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <p> NY / +1 123456 7890 / hello@graphics.studio.com</p>
            </div>
            <div className={styles.copy_right}>
                <p>Copyright © 2019 Graphics Studio | All rights reserved</p>
                </div>
        </div>
    )
}

export default Footer
