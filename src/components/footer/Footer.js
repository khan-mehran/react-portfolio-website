import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className='container'>
            <div className={styles.footer_logo}>
                    <img src={'/images/logo.png'} alt='logo' className={styles.logo} />
                </div>
                <div className={styles.footer_nav}>
                    <nav>
                        <ul>
                            <li>
                                <a href='#about'>About | </a>
                            </li>
                            <li>
                                <a href='#portfolio'>Portfolio | </a>
                            </li>
                            <li>
                            <a href='#contact'>Contact</a>
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
