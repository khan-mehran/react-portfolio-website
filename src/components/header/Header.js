import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
    return (
        
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src={'/images/logo.png'} className={styles.logo_img} />
                </div>
                <div className={styles.navbar}>
                    <nav>
                        <ul>
                            <li>
                                <a href='#about'>About</a>
                            </li>
                            <li>
                                <a href='#portfolio'>Portfolio</a>
                            </li>
                            <li>
                                <a href='#contact'>Contact</a>
                            </li>
                            <li>
                                <a href='#contact'><button>Get Started</button></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            
    )
}

export default Header