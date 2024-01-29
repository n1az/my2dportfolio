import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>BORING LEGEND</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com/n1azmorshed" target='_blank'><FaFacebookF/></a>
        <a href="https://instagram.com/n1azmorshed" target='_blank'><FiInstagram/></a>
        <a href="https://twitter.com/n1azmorshed" target='_blank'><IoLogoTwitter/></a>
        <a href="https://linkedin.com/in/n1az" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/n1az" target='_blank'><FaGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Md. Niaz Morshed. All rigths reserved</small>
      </div>
    </footer>
  )
}

export default Footer