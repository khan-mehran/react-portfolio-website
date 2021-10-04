import React, { useState } from 'react'
import Card from '../card/Card'
import styles from './portfolio.module.css'

const Portfolio = () => {
    const [cards, setCards] = useState('all')
    const all =[
        '/images/abad.png','/images/bane.png','/images/apri.png',
        '/images/v1.png','/images/nalie.png','/images/bane.png'
    ]
    const logo = [
        '/images/v1.png','/images/nalie.png','/images/bane.png'
    ]
    const website = [
        '/images/v1.png','/images/nalie.png','/images/abad.png'
    ]
    const app = [
        '/images/v1.png'
    ]
    
    return (
        <div className={styles.portfolio} id='portfolio'>
            <div className='container'>
                <div className={styles.portfolio_wrapper}>
                    <div className={styles.portfolio_content}>
                        <h3>Portfolio</h3>
                        <p>___________________________________</p>
                    </div>
                    <div className={styles.portfolio_btn}>
                        <button>a</button><button>b</button>
                    </div>
                </div>
                <div className={styles.portfolio_nav}>
                    <ul>
                        <li>
                            <button onClick={() =>{setCards('all')}}> All</button>
                        </li>
                        <li>
                            <button onClick={() =>{setCards('logo')}}> Logo</button>
                        </li>
                        <li>
                            <button onClick={() => {setCards('website')}}> Webistes</button>
                        </li>
                        <li>
                            <button onClick={() => {setCards('app')}}> Mobile Apps</button>
                        </li>
                    </ul>
                </div>
                <di id='all' className='tabcontent'>
                    <div className={styles.cards}>
                        {
                           cards=='all' && all.map((item)=>{
                                return(
                                    <div className={styles.cards_img}>
                                    <Card img={item}/>
                                </div>
                                )
                            })
                            
                        }
                         {
                           cards=='logo' && logo.map((item)=>{
                                return(
                                    <div className={styles.cards_img}>
                                    <Card img={item}/>
                                </div>
                                )
                            })
                            
                        }
                        {
                           cards=='website' && website.map((item)=>{
                                return(
                                    <div className={styles.cards_img}>
                                    <Card img={item}/>
                                </div>
                                )
                            })
                            
                        }
                          {
                           cards=='app' && app.map((item)=>{
                                return(
                                    <div className={styles.cards_img}>
                                    <Card img={item}/>
                                </div>
                                )
                            })
                            
                        }
                    </div>  
                   
                </di> 
            </div>
        </div>
    )
}

export default Portfolio
