import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import WhatsupLogo from '../src/Logo/Whatsup.png';


const Service = () => {
  return (
    <div>
      < div className='nmscje'>
        <ul className='nav12'>
          <li><Link to="/floorplan">Floor-Plans</Link></li>
          <li><Link to="/costestimator">Cost-Estimator</Link></li>
        </ul>
      </div>
      <div>

        <h1 className='haa1'>Our Services</h1>
      </div>
      <div className='rfs5'>
        <div className='dscm5'>
          <div className='rfuje5'>
            < div className='fsvg4'>
              <div className='fd457c'>
                <h4 className='csdc5'>01</h4>
              </div>
            </div>

            <h3>Architectural</h3>
            <p className='boxP'>Crafting innovative and aesthetically pleasing design that redefine spaces with Structure Buildify architectural services.</p>
          </div>
          <div className='rfuje5'>
            < div className='fsvg4'>
              <div className='fd457c'>
                <h4 className='csdc5'>02</h4>
              </div>
            </div>
            <h3>Structural <br /> Construction</h3>
            <p className='boxP'>Crafting solid foundation and innovative architectural solution for robust structural Construction.</p>
          </div>
          <div className='rfuje5'>
            < div className='fsvg4'>
              <div className='fd457c'>
                <h4 className='csdc5'>03</h4>
              </div>
            </div>
            <h3>Interior designing</h3>
            <p className='boxP'>Crafting function and styling interiors for exceptional spaces.</p>
          </div>
        </div>
        <div className='fsdf5'>
          <div className='frunsie5'></div>
        </div>
      </div>

      <div className='rfs5'>
        <div className='dscm5'>
          <div className='rfuje5'>
            < div className='fsvg4'>
              <div className='fd457c'>
                <h4 className='csdc5'>04</h4>
              </div>
            </div>
            <h3>Solar Management</h3>
            <p className='boxP'>Seamlessly integrating sustainable energy solution with expert property Management for a smarter,greener future.</p>
          </div>
          <div className='rfuje5'>
            < div className='fsvg4'>
              <div className='fd457c'>
                <h4 className='csdc5'>05</h4>
              </div>
            </div>
            <h3>property <br /> Management</h3>
            <p className='boxP'>Strategically shaping success with expert insights and tailored solutions for sustainable growth.</p>
          </div>

          <div className='rfuje5'>
            < div className='fsvg4'>
              <div className='fd457c'>
                <h4 className='csdc5'>06</h4>
              </div>
            </div>

            <h3>Business <br /> Consultancy</h3>
            <p className='boxP'>Strategically shaping success with expert insights and tailored solutions for sustainable growth.</p>
          </div>
        </div>
        <div className='fsdf5'>

          <div className='frunsie5'></div>
        </div>
      </div>


      <div className='clints'>
        <h1 className='haa2'>Clint & Reviews</h1>
        <h6 className='cccc'>Creating Powerful Communication and Collaboration With Clients.</h6 >
        <div className='coco'>
          <div className='cont1'>
            <div className='cont'>
              <h1 >97%</h1>
              <h3 className='hhuu'>Of people have positive experiences with our spaces.</h3>
            </div>
          </div>

          <div className='cont1' style={{ backgroundColor: 'red' }}>
            <div className='cont'>
              <h1 className='blblb'>99%</h1>
              <h3 className='hhuu1'>Of clients  are satisfied  with our work.</h3>
            </div>
          </div>
        </div>
      </div>


      <a href="https://wa.me/7772927777" target="_blank" rel="noopener noreferrer">
        <img src={WhatsupLogo} alt="" width="50px" className="whatsapp_btn" />
      </a>
    </div>
  );
}

export default Service;