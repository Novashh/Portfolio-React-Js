import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai';
import{AiFillGithub} from 'react-icons/ai';

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
      <a href='https://www.linkedin.com/in/ashish-mali-109503253' rel='noreferrer' target="_blank"><AiFillLinkedin /></a>
      <a href='https://github.com/Novashh' rel='noreferrer' target="_blank"><AiFillGithub /></a>
    </div> 
  )
}

export default HeaderSocial
