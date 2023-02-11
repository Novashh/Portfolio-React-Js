import React from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // @ts-ignore
    emailjs.sendForm('service_b66zixe', 'template_ij3elk7', form.current, 'UW6HWndxJP_saID7a')
    e.target.reset()
    .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

     <div className="container contact_container">
      <div className="contact_options">

        <article className="contact_option">
        <MdOutlineEmail className="contact_option-icon"/>
          <h4>Email</h4>
          <h5>ashishmali1994@gmail.com</h5>
          <a href='mailto:ashishmali1994@gmail.com'rel='noreferrer' target='_blank'>Send a Message</a>
        </article>

        <article className="contact_option">
        <BsWhatsapp className="contact_option-icon" />
          <h4>WhatsApp</h4>
          <h5>+918605897842</h5>
          <a href='https://api.whatsapp.com/send?phone+918605897842'rel='noreferrer' target='_blank'>Send a Message</a>
        </article>
      </div>
<form ref={form} onSubmit={sendEmail}>
  <input type="text" name='name' placeholder='Your Name' required />
  <input type="email" name='email' placeholder='Your Email' required />
  <textarea name="message" rows={7} placeholder='Your Message' required/>
  <button type='submit' className='btn btn-prime'>Send Message</button>
</form>

     </div>
    </section>
  )
}

export default Contact
