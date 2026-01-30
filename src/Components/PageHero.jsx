import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const PageHero = ({ heading }) => {
  const [isHeroActive, setIsHeroActive] = useState(true);
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

useEffect(() => {
  const onScroll = () => {
    const heroBottom =
      document.querySelector(".hero-centered")?.getBoundingClientRect().bottom || 0;

    setIsHeroActive(heroBottom > 110);
  };

  window.addEventListener("scroll", onScroll);
  onScroll();

  return () => window.removeEventListener("scroll", onScroll);
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
      {/* Header */}
      <section className="hero-wrapper">
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
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>

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

      

      {/* Centered Heading */}
      <section className="hero-centered">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {heading}
        </motion.h2>
      </section>
      </section>

      {/* Sidebar */}
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
         <Link to="/casestudy" onClick={() => setIsSidebarOpen(false)}>Case Study</Link>
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
};

export default PageHero;
