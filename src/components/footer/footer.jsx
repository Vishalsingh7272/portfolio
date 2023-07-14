import React from 'react'
import './footer.css'

import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Vishal</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experciance'>Experciance</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.facebook.com/profile.php?id=100007903542070'><BsFacebook/></a>
        <a href='https://www.instagram.com/rajpuut7272/'><BsInstagram/></a>
        
      </div>

      <div className="footer__copyright">
        <small>
          @Vishal All Rights reserved
          </small>
      </div> 
    </footer>
  )
}

export default Footer