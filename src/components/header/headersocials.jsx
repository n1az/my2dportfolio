import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/n1az" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/n1az" target="_blank"><FaGithub/></a>
        <a href="https://instagram.com/n1azmorshed" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default headersocials