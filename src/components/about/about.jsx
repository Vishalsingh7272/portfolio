import React from 'react'
import './about.css'
import ME from './../../src/assets/me-about'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

    <div className=  "container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image"/>
        </div>
      </div>  
    
    <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
          <FiAward className='about__icon'/>
          <h5>Experciance</h5>
          <small>1+ Years Working </small>
        </article>

        <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>50+ Worldwide </small>
        </article>

        <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>20+ Completed  </small>
        </article>
      </div>
      <p>
      I'm Vishal Singh, a highly skilled and experienced full-stack developer specializing in both front-end and back-end development. With a strong command over modern web technologies such as HTML5, CSS3, and JavaScript, I create seamless and intuitive user interfaces using popular frameworks like React, Bootstrap.  On the server-side, I excel in JavaScript (Node.js), and employ frameworks such as Express.js  to build robust APIs, handle data management, and implement complex business logic. My expertise extends to databases as well, including SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, Firebase), where I design efficient schemas and write optimized queries. Proficient in Git and experienced in testing methodologies, I prioritize code quality and collaboration. Continuously staying updated with the latest trends, I am a dedicated and adaptable developer ready to contribute innovative solutions to any project.
      </p>

      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
    </div>
    </section>
  )
}

export default About