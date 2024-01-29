import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaTelegramPlane} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4mi0n9p', 'template_70exvrs', form.current, 'TQCzF8MSC6SwjA1Qx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>muhammadniazmorshed@gmail.com</h5>
            <a href="mailto:muhammadniazmorshed@gmail.com" target="_blank">Send a mail</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>n1azmorshed</h5>
            <a href="https://m.me/n1azmorshed" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>n1azmorshed</h5>
            <a href="https://t.me/n1azmorshed" target="_blank">Send a telegram</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='You Full Name' required />
          <input type="email" name="email" placeholder='Your Email Address' required />
          <textarea name="message" rows="7" placeholder='Your Message Here' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact