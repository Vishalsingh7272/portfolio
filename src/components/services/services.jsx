import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Welcome to my UI/UX design service, where I specialize in creating exceptional user experiences that seamlessly blend user interface design (UI) and user experience design (UX). With a deep understanding of human-centered design principles, I am dedicated to crafting interfaces that are not only visually appealing but also intuitive and engaging.</p>
            </li>
          </ul>

        </article>
      

      <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Welcome to my web development service service! I'm thrilled to present my expertise in creating outstanding websites that meet your specific needs and objectives. As a skilled web developer, I specialize in delivering high-quality and customized solutions that enhance online presence and drive business growth.</p>
              </li>
          </ul>

        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Welcome to my content creation service, where I combine my passion for design and storytelling to create compelling and engaging content that resonates with audiences. Through captivating visuals, well-crafted copy, and strategic messaging, I help brands communicate their unique stories and connect with their target audience.</p>
            </li>
          </ul>

        </article>

        </div>
    </section>
  )
}

export default Services
