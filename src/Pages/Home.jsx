/**IMPORTANT LIBRARY IMPORT */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**COMPONENTS IMPORT */
import HeroSection from "../Components/HeroSection";
import ServiceCards from "../Components/ServiceCards";


/**IMAGES IMPORT */
import teamImg from '../Images/intro-img.webp'

const Home=()=>{

    return(
        <>
        <HeroSection />

        {/**TRUSTED BUISNESS PARTNER SECTION */}
        <section className="trusted-section">
      <div className="trusted-grid">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="trusted-content"
        >
          <p className="section-subheading">A short Introduction</p>
          <h3 className="section-heading">Your Trusted Business Partner</h3>

          <p className="main-p">
           We are a forward-thinking business consultancy dedicated to helping companies unlock their full potential. Through strategic insights, tailored solutions, and hands-on guidance, we empower businesses to navigate challenges, seize new opportunities, and achieve sustainable growth. Our focus is simple—deliver clarity, direction, and measurable results.
          </p>

          {/* PROGRESS ITEMS */}
          <div className="progress-group">
            <div className="progress-item">
  <span>Corporate Management</span>

  <div className="progress-bar">
    <motion.div
      className="progress-fill"
      initial={{ width: 0 }}
      whileInView={{ width: "90%" }}
      transition={{ duration: 1 }}
    >
      <span className="progress-dot"></span>
    </motion.div>
  </div>
</div>

           <div className="progress-item">
  <span>Business Integration</span>

  <div className="progress-bar">
    <motion.div
      className="progress-fill"
      initial={{ width: 0 }}
      whileInView={{ width: "80%" }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <span className="progress-dot"></span>
    </motion.div>
  </div>
</div>
          </div>
            
           <Link to='/about'><button className="trusted-btn">Know More</button></Link>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="trusted-image"
        >
          <img src={teamImg} alt="Your Trusted Business Partner" />

          <div className="experience-badge">
  <strong>20+</strong>
  <span>
    Years of<br />Experience
  </span>
</div>
        </motion.div>

      </div>
    </section>

        {/**SERVICE CARDS SECTION */}
        <ServiceCards />
        </>
    )
}

export default Home;