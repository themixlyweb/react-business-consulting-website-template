/**IMPORTANT LIBRARY IMPORTS */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**SOCIAL MEDIA ICONS IMPORT */
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

/**IMAGE IMPORTS */
import callIcon from '../Images/footer-call-icon.png';
import mailIcon from '../Images/footer-mail-icon.png';
import locationIcon from '../Images/footer-location-icon.png';

const Footer=()=>{
    return(
        <>
        <footer className="footer">
      <motion.div
        className="footer-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div>
          <h3>BizNexus</h3>
          <p className="footer-intro-p">
            Partner with our expert team to unlock strategic clarity,
            streamline operations, and accelerate your business growth.
          </p>
           <div className="social-icons">
  <a
  href="https://www.facebook.com/"
  className="icon"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook"
>
  <FaFacebookF />
</a>

<a
  href="https://twitter.com/"
  className="icon"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Twitter / X"
>
  <FaTwitter />
</a>

<a
  href="https://www.linkedin.com/"
  className="icon"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <FaLinkedinIn />
</a>

<a
  href="https://www.instagram.com/"
  className="icon"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
>
  <FaInstagram />
</a>
  </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About us</li></Link>
            <Link to='/contact'><li>Contact us</li></Link>
            <Link to='/services'><li>Services</li></Link>
          </ul>
        </div>

        <div>
          <h4>Other Pages</h4>
          <ul>
            <Link to='/blog'><li>Blogs</li></Link>
            <Link to='/casestudy'><li>Case Study</li></Link>
            <Link to='/blogDetail'><li>Blog Individual</li></Link>
          </ul>
        </div>

       <div>
  <h4>Get in Touch</h4>

  {/* EMAIL */}
  <a
    href="mailto:example@email.com"
    className="icon-with-text"
    aria-label="Send email"
  >
    <img src={mailIcon} alt="Email icon" />
    <p>example@email.com</p>
  </a>

  {/* PHONE */}
  <a
    href="tel:+919876543210"
    className="icon-with-text"
    aria-label="Call phone number"
  >
    <img src={callIcon} alt="Phone icon" />
    <p>+91 9876543210</p>
  </a>

  {/* LOCATION */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=201,+The+Collection,+Vittal+Malya+Road"
    target="_blank"
    rel="noopener noreferrer"
    className="icon-with-text"
    aria-label="Open location in Google Maps"
  >
    <img src={locationIcon} alt="Location icon" />
    <p>201, The Collection, Vittal Malya Road</p>
  </a>
</div>
      </motion.div>
    </footer>
    <div className="footer-bottom-container">
       <div className="footer-bottom">
       <p>Copyright © 2026 BizNexus. All rights reserved.</p>
       <p>Privacy Policy | Terms & Conditions</p>
      </div>
      </div>
        </>
    )
}

export default Footer;