import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav.jsx'
import About from './components/about/about.jsx'
import Experciance from './components/experciance/experciance.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Services from './components/services/services.jsx'
import Testimonials from './components/testimonials/testimonials.jsx'
import Contact from './components/Contact/contact.jsx'
import Footer from './components/footer/footer.jsx'
const  App = () => {
  return (
    <>
    
    <Header/>
    <Nav/>
    <About/>
    <Experciance/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App