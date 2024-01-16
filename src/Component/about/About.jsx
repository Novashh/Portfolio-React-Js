import React from 'react';
import "./about.css";
import ME from '../../assets/img5.jpg'
import {FaKickstarter} from 'react-icons/fa';
import {VscRootFolder} from 'react-icons/vsc';




const About = () => {
  return (
    <section id='about'>  
     <h5>Get To Know</h5>
     <h2>About Me</h2>

<div className='container about_container'>

<div className="about_me">
<div className="about_me-image">

  <img src={ME} alt='about-img'/>
</div>
</div>

<div className="about_content">
<div className="about_cards">
  <article className='about_card'>
  <FaKickstarter  className='about_icon'/>
<h5>Experience</h5>
<small>Fresher++</small>
  </article>

  <article className='about_card'>
  <VscRootFolder  className='about_icon'/>
<h5>Projects</h5>
<small>10+ Completed</small>
  </article>

</div>
<p>

Dedicated Front-End Developer with a bachelor's degree, skilled in JavaScript, React.js, HTML, CSS, SCSS/SASS, jQuery, and Redux. Actively pursuing MERN stack proficiency, armed with certifications in Front-End Development and React.js. Specializing in crafting intuitive user interfaces and open to impactful opportunities. Outside of coding, I explore anime, novels, travel, and swimming. Let's connect for exceptional web experiences! 🌟
</p>
<a href='#contact' className='btn btn-prime'>Let's Talk</a>
</div>
</div>



    </section>
  )
}

export default About;
