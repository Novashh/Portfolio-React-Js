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
A "Self-Taught Front-End Developer" with recently learned skills such as HTML, CSS, JavaScript, Bootstrap,
redux and React-Js. Familiar with responsive design and debugging. Ability to work in a team environment and adapt to new technologies quickly. Committed to creating visually appealing and user-friendly websites. Passionate about building compelling digital experiences and motivated to learn new skills and stay 
up-to-date with the latest front-end technologies.
</p>
<a href='#contact' className='btn btn-prime'>Let's Talk</a>
</div>
</div>



    </section>
  )
}

export default About;
