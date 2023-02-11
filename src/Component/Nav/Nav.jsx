import React from 'react';
import './nav.css';
import {FaHome} from 'react-icons/fa';
import {AiOutlineUser} from 'react-icons/ai'
import {MdMiscellaneousServices} from 'react-icons/md';
import {AiFillContacts} from 'react-icons/ai'
import {AiFillBook} from 'react-icons/ai'
import {MdWork} from 'react-icons/md';
 import { useState } from 'react';



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>  setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><FaHome/></a>
      <a href='#about' onClick={()=>  setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>  setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><AiFillBook/></a>
      <a href='#services' onClick={()=>  setActiveNav('#services')} className={activeNav==='#services' ? 'active' : ''}><MdMiscellaneousServices/></a>
      <a href='#portfolio' onClick={()=>  setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active' : ''}><MdWork/></a>
      <a href='#contact' onClick={()=>  setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><AiFillContacts/></a>
    </nav>
  )
}

export default Nav;
