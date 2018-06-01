import React from 'react';
import {Link} from 'react-router-dom';
function Header(props){
    return(
      <header>
    
      <nav className="nav">
      <h2 className="company-logo"> ESKO PHOTOGRAPHY</h2>
        <div className="nav-bar">
           <div className="page-links">
            <Link to="/"id="home" className="page-link">Home</Link>
            <Link to="/images"id="portfolio" className="page-link">Portfolio</Link>
            <Link to="/videos"id="coverart" className="page-link">Videos</Link>
            {/* <Link to="/dashboard" id="dash"></Link> */}
            <Link to="/contact"id="contact" className="page-link">About/Contact</Link>
            <Link to="/bookings"id="api-page" className="page-link">Schedule a Booking</Link>
</div>
            </div>
            </nav>
          </header> 
        
        
    )
};
export default Header;