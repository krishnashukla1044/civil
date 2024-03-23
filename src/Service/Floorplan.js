import React from 'react'
import '../Service/Floorplan.css'
import R1Floor from '../Floor/R1.jpeg';
import R2Floor from '../Floor/R2.jpg';
import R3Floor from '../Floor/R3.jpg';
import R4Floor from '../Floor/R4.jpg';
import R5Floor from '../Floor/R5.jpg';
import R6Floor from '../Floor/R6.jpg';
import D33  from '../Floor/D33.jpg';
import D44  from '../Floor/D44.png';
import { Link } from 'react-router-dom';
import WhwwtService from '../Service/whwwt.png';




const Floorplan = ( ) => {
 
  return (
    <div style={{padding:'0px 15px'}}>
      <ul className='nav1'>
        <li><Link to="/floorplan">Floor-Plans</Link></li>
        <li><Link to="/costestimator">Cost-Estimator</Link></li>
      </ul>

      <h1 className='haa'>Brickspan is Your All-in-One  Floor Plan Solution</h1>
      <div className='Pawar'>
        <div className='Fpera'>
          <h2 style={{margin:'5vh 0px',textAlign:'center'}}>2D Floor Plan</h2>
         
          <p className='p0p'>Step into elegance with our black and white floor plans, where timeless simplicity meets sophisticated design. These monochromatic blueprints exude class and versatility, offering a blank canvas for your creative vision. With clean lines and sharp contrasts, our floor plans elevate any space with a touch of understated luxury.</p>
        </div>
        <div className='pic'>
          <img className='pix' src={R1Floor} alt='' />
        </div>
      </div>

      <div className='Pawar'>
        <div className='pic'>
          <img className='pix' src={R2Floor} alt='' />
        </div>
        <div className='Fpera'>
        <h2 style={{margin:'5vh 0px',textAlign:'center'}}>2D Floor Plan</h2>
          <p className='p0p'>
            Immerse yourself in personalized design with our floor plans featuring room colors. Visualize your space with vibrant hues, carefully curated to reflect your style and preferences. From soothing neutrals to bold accents, explore endless possibilities to infuse personality into every room. With customizable color schemes, create a harmonious and inviting ambiance tailored to your taste. Experience the power of color in shaping your dream environment with our floor plans.</p>
        </div>
      </div>

      <div className='Pawar'>
        <div className='Fpera'>
          <h2 style={{margin:'5vh 0px',textAlign:'center'}}>2D Floor Plan</h2>
          <p className='p0p'>
            Experience innovation with our floor plans enriched with material details. Each blueprint meticulously showcases flooring, wall finishes, and fixtures, offering a comprehensive visualization of your space. From hardwood floors to ceramic tiles, explore a spectrum of materials, enabling informed design decisions and immersive previews of your dream environment. Elevate your planning process with our material-rich floor plans.</p>
        </div>
        <div className='pic'>
          <img className='pix' src={R3Floor} alt='' />
        </div>
      </div>


      <div className='Pawar'>
        <div className='pic'>
          <img className='pix' src={R4Floor} alt='' />
        </div>
        <div className='Fpera'>
          <h2 style={{margin:'5vh 0px',textAlign:'center'}}>2D Floor Plan</h2>
          <p className='p0p'>Enhance your design process with our floor plans featuring transparent backgrounds. Seamlessly integrate these versatile blueprints into your projects without obstructing underlying elements. With transparency, overlaying multiple plans or integrating them into diverse layouts becomes effortless, enabling seamless customization and creative freedom. Elevate your design workflow with our transparent floor plans, empowering your vision with clarity and flexibility.</p>
        </div>
      </div>

      <div className='Pawar'>
        <div className='Fpera'>
          <h2 style={{margin:'5vh 0px',textAlign:'center'}}>2D Floor Plan</h2>
          <p className='p0p'>Optimize your space with our meticulously detailed floor plans, featuring precise measurements and intuitive symbols. Each blueprint is thoughtfully annotated with measurements for rooms, walls, and furniture, ensuring accurate spatial planning. Symbolic representations provide clear insights into functionality, guiding efficient placement of utilities and amenities. Experience clarity and efficiency in every dimension of your space.
          </p>
        </div>
        <div className='pic'>
          <img className='pix' src={R5Floor} alt='' />
        </div>
      </div>

      <div className='Pawar'>
        <div className='pic'>
          <img className='pix' src={R6Floor} alt='' />
        </div>
        <div className='Fpera'>
          <h2>2D Floor Plan With Branding</h2>
          <br /><br />
          <p className='p0p'>
            Elevate your space with our branded floor plans, seamlessly integrating your company's identity into architectural design. From custom logos to corporate colors, we infuse your brand essence into every blueprint. Experience professionalism and cohesion as your brand story unfolds in every corner of your floor plan, enhancing both aesthetics and identity.</p>
        </div>
      </div>

      <div className='Pawar'>
        <div className='Fpera'>
        <h2 style={{margin:'5vh 0px',textAlign:'center'}}>3D Floor Plan</h2>
          <p className='p0p'>Independent living rooms offer privacy and autonomy, providing individuals with personal space to relax and unwind. These spaces typically include essential furnishings and amenities, fostering a sense of independence while ensuring comfort. With ample room for personalization, residents can create a welcoming environment tailored to their preferences and lifestyle.
          </p>
        </div>
        <div className='pic'>
          <img className='pix' src={D44} alt='' />
        </div>
      </div>

      <div className='Pawar'>
        <div className='pic'>
          <img className='pix' src={D33} alt='' />
        </div>
        <div className='Fpera'>
        <h2 style={{margin:'5vh 0px',textAlign:'center'}}>3D Floor Plan</h2>
          <p className='p0p'>
          A 3D floorplan offers a dynamic visualization of architectural layouts, providing depth and perspective for better understanding. Its immersive nature aids in effective communication of design concepts, enhancing client engagement and decision-making. With detailed renderings and interactive features, 3D floorplans offer an unparalleled experience, revolutionizing architectural presentations.</p>
        </div>
      </div>


      
      <a href="https://wa.me/7772927777" target="_blank" rel="noopener noreferrer">
      <img src={WhwwtService} alt="" width="50px" className="whatsapp_btn" />
    </a>
    </div>

  )
}

export default Floorplan;