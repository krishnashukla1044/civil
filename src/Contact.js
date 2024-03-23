import React from 'react';
import './Contact.css';
import Contact1Allimg from './Allimg/Contact1.mp4';
import WhatsupLogo from '../src/Logo/Whatsup.png';

function Contact() {
  return (  
    <div id='main0'>
      <div className="video-container">

        <video className='vid' src={Contact1Allimg} autoPlay muted loop></video>

        <div className="form-overlay">
          <h1>Contact Us</h1>

          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <a href="https://wa.me/7772927777" target="_blank" rel="noopener noreferrer">
      <img src={WhatsupLogo} alt="" width="50px" className="whatsapp_btn" />
    </a>

      <div className='page2'></div>
    </div>
  );
}

export default Contact;
