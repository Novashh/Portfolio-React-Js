import React from 'react'
import './service.css';
import {BsCheckLg} from 'react-icons/bs';

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

<div className="container services_container">
  
  <article className="service">
    <div className="service_head">
      <h3>UI/UX Responsive</h3>
    </div>
    <ul className="service_list">

      <li>
        <BsCheckLg className='service_list-icon'/>
        <p>Mobile-First Design Approach.</p>
      </li>

      <li>
        <BsCheckLg className='service_list-icon'/>
        <p>I can develop responsive design.</p>
      </li>

      <li>
        <BsCheckLg className='service_list-icon'/>
        <p>Everything must all be responsive.</p>
      </li>

      <li>
        <BsCheckLg className='service_list-icon'/>
        <p>Responsive images are essential for mobile-friendly design.</p>
      </li>

    </ul>
  </article>


  <article className="service">
    <div className="service_head">
      <h3>Frontend Development </h3>
    </div>
    <ul className="service_list">

      <li>
        <BsCheckLg className='service_list-icon'/>
        <p>I can develop a front end part of website.</p>
      </li>

      <li>
        <BsCheckLg className='service_list-icon'/>
        <p>I can develop a front end part of web App.</p>
      </li>

      <li>
        <BsCheckLg className='service_list-icon'/>
        <p>I Know HTML, CSS, Bootstrap, Jquery, React js, and JavaScript front end skills.</p>
      </li>

      <li>
        <BsCheckLg className='service_list-icon'/>
        <p>I have very curious mind for to learn new tech and development process.</p>
      </li>


    </ul>
  </article>


  <article className="service">
    <div className="service_head">
      <h3>Support / Debugging</h3>
    </div>
    <ul className="service_list">
    
      <li>
        <BsCheckLg className='service_list-icon'/>
        <p>Fixing Broken Links.</p>
      </li>

      <li>
        <BsCheckLg className='service_list-icon'/>
        <p>Debugging errors on webpage.</p>
      </li>

      <li>
        <BsCheckLg className='service_list-icon'/>
        <p>Ensuring Design Consistency across All Pages.</p>
      </li>

      <li>
        <BsCheckLg className='service_list-icon'/>
        <p>Developing and maintaining the user interface.</p>
      </li>


    </ul>
  </article>

</div>
    </section>
  )
}

export default Service;
