import React, { useState, useEffect } from 'react';
import './Home.css';
import tspLogo from '../src/Logo/tsp.png'
import WhatsupLogo from '../src/Logo/Whatsup.png';
// home img
import firstHome1 from './Home1/first.jpg';
import secondHome1 from './Home1/second.jpg';
import thirdHome1 from './Home1/third.jpg';
import fourthHome1 from './Home1/fourth.jpg';
// 1st slide
import house1Image from './Image/house1.jpg';
import house2Image from './Image/house2.jpg';
import house3Image from './Image/house3.jpg';
import house4Image from './Image/house4.jpg';
import house5Image from './Image/house5.jpg';
// 2nd slide
import Int1Image2 from './Image2/Int1.jpg';
import Int2Image2 from './Image2/Int2.jpg';
import Int3Image2 from './Image2/Int3.jpg';
import Int4Image2 from './Image2/Int4.jpg';
import Int5Image2 from './Image2/Int5.jpg';
// 3rd slide
import ii1Image3 from './Image3/ii1.jpg';
import ii2Image3 from './Image3/ii2.jpg';
import ii3Image3 from './Image3/ii3.jpg';
import ii4Image3 from './Image3/ii4.jpg';
import ii5Image3 from './Image3/ii5.jpg';
// 4th slide
import kt1Image4 from './Image4/kt1.jpg';
import kt2Image4 from './Image4/kt2.jpg';
import kt3Image4 from './Image4/kt3.jpg';
import kt4Image4 from './Image4/kt4.jpg';
import kt5Image4 from './Image4/kt5.jpg';
// 5th
import g1garden from './garden/g1.jpg';
import g2garden from './garden/g2.jpg';
import g3garden from './garden/g3.jpg';
import g4garden from './garden/g4.jpg';
import g5garden from './garden/g5.jpg';



function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
    }, 5000); // Adjust slide duration as needed
    return () => clearInterval(interval);
  }, []);

  const totalSlides = 4;
  return (
    <div id='main'>
      <div id='container' style={{ position: 'relative' }}>
        <img src={tspLogo} alt="Logo" className="logo1" style={{ position: 'absolute', top: '50%', left: '20px', zIndex: '1' }} />
        <div className='silde' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          <div className='home'>
            <img className='hhhh' src={firstHome1} alt='first 1' />
            <img className='hhhh' src={secondHome1} alt='second 2' />
            <img className='hhhh' src={thirdHome1} alt='third 3' />
            <img className='hhhh' src={fourthHome1} alt='fourth 4' />
          </div>
        </div>
      </div>

      <a href="https://wa.me/7772927777" target="_blank" rel="noopener noreferrer">
        <img src={WhatsupLogo} alt="" width="50px" className="whatsapp_btn" />
      </a>
      <div id='Container2'>
        <div className='pera'>
          <h1>CONSTRUCTION</h1>
          <span>--------///////////////////////////////////----------</span>
          <p>
            Brickspan provides expert support at every construction stage. With vast experience, we offer tailored services from planning to maintenance. Whether it's a custom home or a commercial project, we bring your vision to life. Our focus on quality ensures top-notch results. Partner with Brickspan for a smooth construction journey.</p>
        </div>
        <div className='Image'>
          <div className='silde1'>
            <img className='img' src={house1Image} alt='house 1' />
            <img className='img' src={house2Image} alt='house 2' />
            <img className='img' src={house3Image} alt='house 3' />
            <img className='img' src={house4Image} alt='house 4' />
            <img className='img' src={house5Image} alt='house 5' />
          </div>
        </div>
      </div>

      <div id='Container3'>

        <div className='Image2'>
          <div className='silde2'>
            <img className='img1' src={Int1Image2} alt='Int 1' />
            <img className='img1' src={Int2Image2} alt='Int 2' />
            <img className='img1' src={Int3Image2} alt='Int 3' />
            <img className='img1' src={Int4Image2} alt='Int 4' />
            <img className='img1' src={Int5Image2} alt='Int 5' />
          </div>
        </div>
        <div className='pera1'>
          <h1>ARCHITECTURAL</h1>
          <span>--------///////////////////////////////////----------</span>
          <p>
            "Architecture at Brickspan embodies innovation and elegance. We seamlessly blend modern aesthetics with functionality, crafting spaces that inspire. From sleek urban designs to timeless residential havens, our architectural prowess transforms dreams into reality, enriching lives through visionary constructions."</p>
        </div>
      </div>

      <div id='Container2'>
        <div className='pera'>
          <h1 >INTERIOR DESIGN</h1>
          <span>--------///////////////////////////////////----------</span>
          <p>
            Brickspan provides expert support at every construction stage. With vast experience, we offer tailored services from planning to maintenance. Whether it's a custom home or a commercial project, we bring your vision to life. Our focus on quality ensures top-notch results. Partner with Brickspan for a smooth construction journey.</p>
        </div>
        <div className='Image3'>
          <div className='silde1'>
            <img className='img' src={ii1Image3} alt='ii 1' />
            <img className='img' src={ii2Image3} alt='ii 2' />
            <img className='img' src={ii3Image3} alt='ii 3' />
            <img className='img' src={ii4Image3} alt='ii 4' />
            <img className='img' src={ii5Image3} alt='ii 5' />
          </div>
        </div>
      </div>


      <div id='Container3'>

        <div className='Image2'>
          <div className='silde2'>
            <img className='img1' src={g1garden} alt=' 1' />
            <img className='img1' src={g2garden} alt='2' />
            <img className='img1' src={g3garden} alt=' 3' />
            <img className='img1' src={g4garden} alt=' 4' />
            <img className='img1' src={g5garden} alt=' 5' />
          </div>
        </div>
        <div className='pera1'>
          <h1>LANDSCAPING & GARDENING</h1>
          <span>--------///////////////////////////////////----------</span>
          <p>
            "Architecture at Brickspan embodies innovation and elegance. We seamlessly blend modern aesthetics with functionality, crafting spaces that inspire. From sleek urban designs to timeless residential havens, our architectural prowess transforms dreams into reality, enriching lives through visionary constructions."</p>
        </div>
      </div>

{/* 
      <div id='Container3'>

        <div className='Image2'>
          <div className='silde2'>
            <img className='img1' src={kt1Image4} alt='kt 1' />
            <img className='img1' src={kt2Image4} alt='kt 2' />
            <img className='img1' src={kt3Image4} alt='kt 3' />
            <img className='img1' src={kt4Image4} alt='kt 4' />
            <img className='img1' src={kt5Image4} alt='kt 5' />
          </div>
        </div>
        <div className='pera1'>
          <h1>Luxury Kitchen</h1>
          <span>--------///////////////////////////////////----------</span>
          <p>
            "Luxury kitchens at Brickspan epitomize sophistication and functionality. From contemporary urban layouts to classic residential retreats, our designs fulfill dreams, enhancing lives with visionary culinary spaces."</p>
        </div>
      </div> */}

 { 
      <div id='Container3'>

        <div className='Image4'>
          <div className='pera2'>
            <h1 className='h111'>Luxury Kitchen</h1>
            <span className='dodo'>--------///////////////////////////////////----------</span>
            <br/>
            <p1>
              "Luxury kitchens at Brickspan epitomize sophistication and functionality. From contemporary urban layouts to classic residential retreats, our designs fulfill dreams, enhancing lives with visionary culinary spaces."</p1>
          </div>
          <div className='silde2'>
            <img className='img1' src={kt1Image4} alt='kt 1' />
            <img className='img1' src={kt2Image4} alt='kt 2' />
            <img className='img1' src={kt3Image4} alt='kt 3' />
            <img className='img1' src={kt4Image4} alt='kt 4' />
            <img className='img1' src={kt5Image4} alt='kt 5' />
          </div>
        </div>
      </div> }



    </div>
  );
}



export default Home;
