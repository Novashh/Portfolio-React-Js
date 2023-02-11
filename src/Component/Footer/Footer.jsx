import React from 'react'
import './footer.css';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer'>
     <a href="#" className="footer_logo">Ashish Mali</a>

 <ul className="permalinks">
  <li><a href="#">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#contact">Contact</a></li>
 </ul>

<div className="footer_socials">
  <a href="https://www.facebook.com/mali.ashish.3"><FaFacebookSquare /></a>
  <a href="https://www.instagram.com/nova_ash.94"><FaInstagramSquare /></a>
</div>

<div className="footer_copyright">
  <big>
    Thank You For Visiting 
  </big>
</div>

    </footer>
  )
}

export default Footer
