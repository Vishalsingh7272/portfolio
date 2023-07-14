import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'



import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';// import Swiper core and required modules



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Client</h5>
      <h5>Testimonials</h5>

    <div className="container testimonials__container">
        < article  className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One"/>
          </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>A visually stunning portfolio that captivates with its unique blend of artistry and innovation</small>
          
         </article>


        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar two"/>
            </div>
            <h5 className='client__name'>Ravikanth Reddy</h5>
            <small className='client__review'>An exemplary collection of work that seamlessly blends aesthetics, functionality, and user experience</small>
          
        </article>


        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar three"/>
            </div>
            <h5 className='client__name'>Ankur</h5>
            <small className='client__review'>A portfolio that exudes professionalism, demonstrating a keen eye for detail and a commitment to excellence</small>
          
        </article>


        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar four"/>
            </div>
            <h5 className='client__name'>Priya</h5>
            <small className='client__review'>A dynamic portfolio that showcases a versatile range of skills and a true mastery of the craft</small>
          
        </article>
      </div>

    </section>
  )
}

export default Testimonials