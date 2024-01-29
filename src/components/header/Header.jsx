import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/levi.png'
import Headersocials from './headersocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Boring Legend</h5>
        <h1>Md. Niaz Morshed</h1>
        <h5 className="text-light">AI Engineer</h5>
        <CTA />
        <Headersocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>  
  )
}

export default Header