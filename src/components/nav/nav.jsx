import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {BsChatHeart} from 'react-icons/bs'
import {LuContact} from 'react-icons/lu'
import  {useState} from 'react'
const Nav = () => {
  
    const [activeNav,setActiveNav]=useState('#')
    
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a> 
      <a href="#about" onClick={() => setActiveNav('about' )}className={activeNav === 'about' ? 'active' : ''}><AiOutlineUser/></a>  
      <a href="#experciance" ocClick={()=> setActiveNav('experciance')} className={activeNav === 'experciance' ? 'active' : ''} ><BsBook/></a>   
      <a href="#services" ocClick={()=> setActiveNav('services')} className={activeNav === 'services' ? 'active' : ''} ><BsChatHeart/></a>  
      <a href="#contact" ocClick={()=> setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''} ><LuContact/></a>  
       
    </nav>
  )
}

export default Nav