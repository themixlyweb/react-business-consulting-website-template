/**IMPORTANT LIBRARY IMPORTS */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/**IMAGE IMPORT */
import heroImg from "../Images/hero-img.webp";


const HeroSection=()=>{
  const [isHeroActive, setIsHeroActive] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


useEffect(() => {
  const handleScroll = () => {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const heroBottom = hero.getBoundingClientRect().bottom;
    setIsHeroActive(heroBottom > 110); 
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleNavigate = (path) => {
    navigate(path);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    if (window.innerWidth <= 768) {
      setOpenDropdown((prev) => (prev === menu ? null : menu));
    }
  };

  return (
    <>
     <section className="hero">
    <header className={`sticky-header ${isHeroActive ? "inside-hero" : "fixed"}`}>
      <div className="nav-div">
        <h1 className="logo"><Link to='/'>BizNexus</Link></h1>

      <button
  className="menu-btn"
  onClick={() => setIsSidebarOpen(true)}
>
  ☰
</button>

        <nav className={`nav-links`}>
          {/* HOME */}
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>

          {/* ABOUT */}
          <div
            className={`dropdown ${openDropdown === "about" ? "show" : ""}`}
            onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown("about")}
            onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
          >
            <button onClick={() => toggleDropdown("about")}>
            Pages ▾
            </button>
            <div className="dropdown-menu">
              <p onClick={() => handleNavigate("/services")}>Services</p>
              <p onClick={() => handleNavigate("/casestudy")}>Case Study</p>
            </div>
          </div>

          <Link to="/blog">Blogs</Link>
          <Link to="/contact">Contact Us</Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="cta-btn"
            onClick={() => handleNavigate("/bookappointment")}
          >
            Book an Appointment
          </motion.button>
        </nav>
      </div>
    </header>


    
      <div className="hero-grid">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hero-image"
        >
         
          <img src={heroImg} alt=" Expert Business Consulting <br />
            That Drives Real Growth" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .3 }}
          className="hero-content"
        >
          <h2>
            Expert Business Consulting <br />
            That Drives Real Growth
          </h2>

          <p>
            Empowering your business with strategic guidance, smart planning, & measurable results. Partner with experts committed to <br />
            <span>“Scaling your success.”</span>
          </p>

          <div className="hero-actions">
           <Link to='/contact'><button className="outline-btn">Get a Consultation</button></Link> 
            <Link to='/services'><button className="solid-btn">Explore Services</button></Link>
          </div>
        </motion.div>

      </div>
    </section>

    <div className="hero-sidebar">
<AnimatePresence>
  {isSidebarOpen && (
    <motion.aside
      className="sidebar"
      initial={{ x: "-100%" }}   // hidden (left)
      animate={{ x: 0 }}         // slide in
      exit={{ x: "-100%" }}      // slide out
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="sidebar-header">
        <h2 className="logo">BizNexus</h2>
        <button
          className="close-btn"
          onClick={() => setIsSidebarOpen(false)}
        >
          ✕
        </button>
      </div>

      <nav className="sidebar-links">
        <Link to="/" onClick={() => setIsSidebarOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsSidebarOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setIsSidebarOpen(false)}>Services</Link>
        <Link to="/blog" onClick={() => setIsSidebarOpen(false)}>Blogs</Link>
        <Link to="/contact" onClick={() => setIsSidebarOpen(false)}>Contact</Link>
        <Link to="/bookappointment" onClick={() => setIsSidebarOpen(false)}>Book Appointment</Link>
      </nav>

      <div className="sidebar-footer">
        <p>+91 9876543210</p>
        <p>example@email.com</p>
      </div>
    </motion.aside>
  )}
</AnimatePresence>
</div>
    </>
  );
}

export default HeroSection;
