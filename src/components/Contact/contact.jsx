import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';


const Contact = () => {
  

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
           <article className="contact__option">
              <AiOutlineMail className='.contact__option-icon'/>
              <h4>Email</h4>
              <h5>vs905964@gmail.com</h5>
              <a href='mailto:vs905964@gmail.com' target='_blank'>Send a Message</a>
           </article>

           <article className="contact__option">
              <BsMessenger className='.contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Vishal Singh</h5>
              <a href='https://www.facebook.com/messages/t/100076594343886/'target='_blank'>Send a Message</a>
           </article>

           <article className="contact__option">
              <BsWhatsapp className='.contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>9453020918</h5>
              <a href='https://api.whatsapp.com/send?+919453020918' target='_blank'>Send a Message </a>
           </article>
        </div>
       {/* end of contact option*/}
        <form action=''> 
          <input type="type" name="Name" placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' readOnly ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact