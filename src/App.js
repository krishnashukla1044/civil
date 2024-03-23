// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import logoLogo from '../src/Logo/logo.jpg';
import Home from './Home';
import About from './About';
import Service from './Service';
import Floorplan from '../src/Service/Floorplan';
import Costestimator from '../src/Service/Costestimator';
import Contact from './Contact';
import Navbar from './Navbar';
// import Service from './Service';



const App = () => {
  return (
    <Router>
      <div style={{width:'100vw',height:'max-content'}}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/Costestimator" element={<Costestimator />} />
          <Route exact path="/floorplan" element={<Floorplan />} />
          <Route exact path="/contact" element={<Contact />} />

        </Routes>




        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo" style={{width:'20vw'}}>
              <img src={logoLogo}  alt='' />
            </div>
            <div className="footer-copyright">
              &copy; BRICKSPAN PVT. LTD
              <br/>
              <a className='cdscerf52cffdv'  href="#" ><i class="fas fa-map-marker-alt"></i> Er. Amritansh Sharma <br/> 
                 A-69 Airport city Bhopal</a>


            </div>
            <div className="footer-links">
              <a href="https://www.facebook.com/profile.php?id=100086326869346&mibextid=dGKdO6"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/brickspan_private_limited?igsh=MTJ5dDE1dGFicjZseA%3D%3D&utm_source=qr"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <h3 className='f3'>@Galhotra Services PVT.LTD</h3>
        </footer>
      </div>
    </Router>
  );
};

export default App;
