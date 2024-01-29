import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Do</h5>
      <h2>Projects</h2>

      <div className="container services__container">
        <article className='services'>
          <div className="service__head">
            <h3>ML Bootcamp</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Analysis Practices</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Machine Learning Approaches</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Deep Learning Algorithms</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Jupyter Notebook Platform</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Scikit-Learn Libraries</p>
            </li>
          </ul>
        </article>
        <article className='services'>
          <div className="service__head">
            <h3>MedBot</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Based Application</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Management System for Medicine</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Django Based Python App</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mapbox For Map System</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Delivery Route Optimization</p>
            </li>
          </ul>
        </article>
        <article className='services'>
          <div className="service__head">
            <h3>Dog-Vision-Ai</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Deep Learning Model</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Used Transfer Learning</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Tensorflow Library in Google Colab</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Image Recognition Optimization</p>
            </li>
          </ul>
        </article>
        <article className='services'>
          <div className="service__head">
            <h3>LookAir</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Based Application</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Made with Django</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Air Quality Checking</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Color Based Categorical View</p>
            </li>
          </ul>
        </article>
        <article className='services'>
          <div className="service__head">
            <h3>Minimal-Storm</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>C++ Based Application</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Basic OpenGL Library</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom Matrix Shape</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Environment and Sound Control</p>
            </li>
          </ul>
        </article>
        <article className='services'>
          <div className="service__head">
            <h3>Magnetic Track</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HCI Based Project</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Tangible User Interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Electromagnetic Points</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Individual Point Switch</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Remote Control with Blutooth or WiFi</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services