import React from 'react';
import { Link } from 'react-router-dom';
// import{Switch, Route}from "react-router-dom";
// import FormList from './Formlist';
// import ContactDetails from './ContactDetails';
function Contact(props) {
    return (
        <div className="contact-page">
            <div className="left">
                <div className="contact-words">
                    <div className="words-on-page">
                        <h1 className="story"> MY STORY</h1>
                        <p>In 2006, I began a short internship with the prestigious SlickForce Studio's in Los Angeles,
                        studying under Nick Saglimbeni. After just three months, I became a member of the 
                        SlickForce Team, which began my journey into mastering all phases of what is required in the
                        photography field, moving through the stages of grip gear, lighting, casting, business
                        management, location scouting, and pro retouching. Not long after I was co-publishing with the 
                        my mentor in the Kardashian Konfidential Book. After three years with SlickForce Studios,
                        I decided to move to Las Vegas, and start Esko Photography.</p>
                    </div>


                    <br />
                    <br />

                    <img id="nick" src="http://nicksaglimbeni.com/wp-content/gallery/halloween-2010/derek-eskridge-kevin-savarese.jpg" alt="derek eskridge and nick saglimbeni" />
                    <br />
                </div>

                <div className="services">
                    <ul className="bolded"><p>I specialize in:</p>
                        <li>Real Estate Photography,</li>
                        <li>Portfolios,</li>
                        <li>  Product/Company Branding,</li>
                        <li>Videography,</li>
                        <li>  Photo Retouching/Editing,</li>
                        <li> Graphic Design,</li>
                        <li> Marketing/Advertising,</li>
                        <li> SEO/Google Analytics/Adwords </li>
                    </ul>
                </div>
            </div>


            <div className="right-side">
               
                <div className="derek-pic"></div>
                <h4 className="derek">Derek Eskridge, Owner of Esko Photography</h4>

                <div className="featured">
                    <ul>
                        <li> OK Magazine </li>
                        <li>Celeb-Life Magazine</li>
                        <li>Peta Campaigns </li>
                        <li> Breast Cancer Awareness Campaigns</li>
                        <li>Kardashian's Konfidential Book</li>
                        <li>WMB3D Magazine</li>

                    </ul>
                </div>

            </div>
            {/* <div className="links">
                <h3 className="links-h3">Other Places you can find my work:</h3>
            <ul className="link-list">

                <li><a href="http://slickforcegirl.com/tag/vanessa-valentine/page/4/">SlickForce Girl</a></li>
                <li><a href="http://www.modelmavens.com/2012/04/30/melanie-iglesias-3d/"> Model Mavens</a></li>
                <li><a href="https://www.medioq.com/XX/Unknown/192601734114525/WMB-3D---World%27s-Most-Beautiful">Wmb3d</a></li>
                <li><a href="https://500px.com/esko_vegas">550px </a></li>
            </ul> */}
            {/* </div> */}


            <div className="bottom">
                <div className="connect-with-us" >Connect with Esko Photography on Social Media</div>

                <br />
                <div className="icons">
                    <i><Link to="https://www.facebook.com/EskoPhotography/" class="fa fa-facebook"></Link></i>
                    <i> <Link to="https://www.instagram.com/eskobruhh/?hl=en" className="fa fa-instagram"></Link></i>
                    <i> <Link to="https://www.linkedin.com/in/derek-eskridge-07484587/" className="fa fa-linkedin"></Link></i>
                    <i> <Link to="https://www.youtube.com/channel/UC1-Ri3uQTz0dW7mEBZZGjTw" className="fa fa-youtube-square"></Link></i>
                    <br />
                    <div className="dashboard-access">
                        <p><Link path="/dashboard" to="./Dashboard.js" id="dash-access">Admin Access Only</Link></p>
                    </div>

                </div>
            </div>

        </div>



    )
}

export default Contact;