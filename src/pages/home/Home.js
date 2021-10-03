import React from 'react'
import About from '../../components/about/About'
import Capabilities from '../../components/capabilities/Capabilities'
import Clients from '../../components/clients/Clients'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import Portfolio from '../../components/portfolio/Portfolio'

const Home = () => {
    return (
        <>
        <Hero/>
        <About/>
        <Portfolio/>
        <Capabilities/>
        <Clients/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home
