// // Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import tspLogo from'../src/Logo/tsp.png'

// const Navbar = () => {
//   return (
//     <nav>
//       <img src={tspLogo} alt="Logo" className="logo" />
//       <ul className='nav-bar'>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/service">Service</Link></li>

//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tspLogo from '../src/Logo/tsp.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={isMenuOpen ? 'sticky open' : 'sticky'}>
      <img src={tspLogo} alt="Logo" className="logo" />
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={isMenuOpen ? 'nav-bar open' : 'nav-bar'}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/service">Service</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
