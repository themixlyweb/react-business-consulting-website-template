/**IMPORTANT LIBRARY IMPORTS */
import React from "react";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";

/**DATA IMPORTS */
import { Services } from "../Data";

const ServiceCards=()=>{
    return(
        <>
         <section className="services-section">
      <div className="services-header">
        <p className="section-subheading">What We Offer</p>
        <h3 className="section-heading">Our Best Services</h3>
      </div>

      <div className="services-grid">
        {Services.map((item, i) => (
          <Link
        key={i}
        to={`/serviceDetail`} 
        style={{ textDecoration: "none" }}
      >
          <motion.div
            key={i}
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
          >
            <div className="icon-box">
           <img src={item.icon} alt={item.title} />
            </div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </motion.div>
          </Link>
        ))}
      </div>
    </section>
        </>
    )
}

export default ServiceCards;