import React from 'react';
// import aboutAllimg from './Allimg/about.jpg';
import imgp1Allimg from './Allimg/imgp1.jpg';
import imgp2Allimg from './Allimg/imgp2.jpg';
import imgp3Allimg from './Allimg/imgp3.jpg';
import WhatsupLogo from '../src/Logo/Whatsup.png';

import './About.css';

function About() {
  // Define the function to be executed when the button is clicked
  const handleButtonClick = () => {
    // Add your code here to perform actions when the button is clicked
    console.log("Button clicked!");
    // For example, you can navigate to another page or update state
  };

  return (
    <div className='main22'>
      <div className='Contaner' style={{ height: 'max-content ' }}>
        <div className='About1' >
          {/* <img src={aboutAllimg} alt='' /> */}
          <h1 className='one'>CONSTRUCTION</h1>
          {/* Add onClick event handler to the button */}
        </div>
        <button className='bttttttt' onClick={handleButtonClick}> MORE ABOUT</button>

      </div>

      <a href="https://wa.me/7772927777" target="_blank" rel="noopener noreferrer">
        <img src={WhatsupLogo} alt="" width="50px" className="whatsapp_btn" />
      </a>

      <div className='Page2'>
        <div className='care'>
          <h1 className='two'>ABOUT US</h1> <br></br>
          <p className='p22'>
            Brickspan Consultancy is a dynamic leader in the construction industry, renowned for its innovative solutions and commitment to excellence. With a dedicated team of experts, Brickspan excels in project management, design, and execution, ensuring timely delivery and unparalleled quality. Clients trust Brickspan for its integrity, professionalism, and transformative approach to construction projects. </p>
        </div>

        <div className='care1'>
        <h1 className='three'>HOW WE ARE</h1><br>
        </br>
        <p className='p200'>Brickspan Consultancy stands as a beacon of expertise in the construction realm, offering comprehensive solutions tailored to client needs. Our seasoned professionals leverage cutting-edge technologies and industry insights to deliver projects of exceptional quality and efficiency. With a focus on innovation and client satisfaction, Brickspan Consultancy pioneers excellence in every endeavor.
        </p>
        </div>
      </div>

      <div id='main2'>
        <div className='p1'> <img src={imgp1Allimg} alt='' /></div>
        <div className='p2'> <img src={imgp2Allimg} alt='' /></div>
        <div className='p3'><img src={imgp3Allimg} alt='' /></div>
      </div>


      <div id='main3'>
        <div className='page4'>
          <h1>OUR WORK</h1>
          <p>Construction work encompasses a diverse range of activities involved in creating infrastructure, buildings, and other structures. From planning and designing to execution and completion, construction work requires meticulous coordination of resources, skilled labor, and project management expertise. Construction companies oversee projects from inception to handover, ensuring compliance with regulations, adherence to safety standards, and the delivery of high-quality outcomes. With a focus on innovation, sustainability, and client satisfaction, construction work plays a vital role in shaping the built environment and driving economic development.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
