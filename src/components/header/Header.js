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
                                <Link to='#abou_me'>About</Link>
                            </li>
                            <li>
                                <Link to='#'>Portfolio</Link>
                            </li>
                            <li>
                                <Link to='#'>Contact</Link>
                            </li>
                            <li>
                                <Link to='#'><button>Get Started</button></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            
    )
}

export default Header