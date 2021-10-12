import React from 'react'
import Header from '../header/Header'
import styles from './hero.module.css'

const Hero = () => {
    return (
            <div className={styles.hero}>
            <div className='container'>
                <Header/>
                <div className={styles.hero_top}>
                    <img src={'/images/hero_top.png'} alt='hero_top_img' className={styles.hero_top_img} />
                </div>
                <div className={styles.hero_wrapper}>
                    <div className={styles.hero_content}>
                        <h6>Hello, I am</h6>
                        <h1>Mark
                            Reccardo</h1>
                        <p>A young <span> UI/UX </span> designer with crazy for mobile & web design.</p>
                        <p>Find Me on</p>
                        <a href='#contact'><button>Hire Me</button></a>
                        <a href='#portfolio'><button>Portfolio</button></a>
                    </div>
                    <div className={styles.hero_img}>
                        <img src={'/images/hero_img.png'} alt='hero_img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
