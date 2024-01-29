import React from 'react'
import './about.css'
import ME from '../../assets/min.jpg'
import {FaAward} from 'react-icons/fa'
import {SiAzurefunctions} from 'react-icons/si'
import {FaGraduationCap} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <SiAzurefunctions className='about__icon'/>
              <h5>Hobby</h5>
              <small>Photography & Gaming</small>
            </article>
            <article className='about__card'>
              <FaGraduationCap className='about__icon'/>
              <h5>Education</h5>
              <small>Computer Science Graduate</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Awards</h5>
              <small>3 Awards Recieved</small>
            </article>
          </div>
          <p>
            Assalamualikum (May Peace Be Upon You), I am Md Niaz Morshed, a computer science Graduate currently
            studying Masters in Data Science at University of Potsdam in Germany. My Home is in Bhola, Bangladesh.
            I have completed my Bachelor Degree with two Dean's List Honor Award and Magna Cum Laude distinction.
            I'm mostly busy doing research or projects in different areas of Data Science, Deep Learning, Neural Network,
            Artificial Intelligence and HCI. I have also acclaimed IBM's Professional Certificate for Ai Engineering in
            Coursera and learned industry level responsibilities and working scope for an Ai Engineer. Though I am not
            a regular guy in github but you can see some of my projects and notebooks in my github. Thank you for reading about me.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About