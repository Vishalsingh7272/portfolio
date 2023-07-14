import React from 'react'
import './experciance.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'
const Experciance = () => {
  return (
    <section id="experciance">
      
      <h5>What Skills I Have</h5>
      <h2>My Experciance</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experciance__content'>
            <article className='experciance__details'>
               <AiOutlineCheckCircle className='experciance__details-icon'/> 
               <div><h4>HTML</h4>   
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experciance__details'>
               <AiOutlineCheckCircle className='experciance__details-icon' /> 
               <div><h4>CSS</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experciance__details'>
               <AiOutlineCheckCircle className='experciance__details-icon'/> 
               <div>
               <h4>JavaScript</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experciance__details'>
               <AiOutlineCheckCircle className='experciance__details-icon'/> 
               <div>
               <h4>BootStrap</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experciance__details'>
               <AiOutlineCheckCircle className='experciance__details-icon'/> 
               <div>
               <h4>React</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experciance__details'>
               <AiOutlineCheckCircle className='experciance__details-icon'/> 
               <div>
               <h4>JQuery</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
          </div>

        </div>



{/* end of frontend */}
        
        <div className='experinece__backend'>
        <h3>Backend Development</h3>
          <div className='experciance__content'>
            <article className='experciance__details'>
               <AiOutlineCheckCircle className='experciance__details-icon'/> 
               <div>
               <h4>Node JS</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experciance__details'>
               <AiOutlineCheckCircle className='experciance__details-icon'/> 
               <div>
               <h4>MongoDB</h4>
               <small className='text-light'>Intermediate</small>
               </div>
            </article>
            <article className='experciance__details'>
               <AiOutlineCheckCircle className='experciance__details-icon'/> 
               <div>
               <h4>PHP</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experciance__details'>
               <AiOutlineCheckCircle className='experciance__details-icon'/> 
               <div>
               <h4>MySQL</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experciance__details'>
               
               <AiOutlineCheckCircle className='experciance__details-icon'/> 
               <div>
               <h4>Python</h4>
               <small className='text-light'>Basic</small>
               </div>
            </article>
            
          </div>

        </div>
      </div>
      
    </section>
  )
}

export default Experciance