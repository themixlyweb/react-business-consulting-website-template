import './App.css';
import './MediaQueries.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import CaseStudy from './Pages/CaseStudy';
import Footer from './Components/Footer';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Appointment from './Pages/Appointment';
import ServiceDetail from './Pages/ServiceDetail';
import CaseStudyDetail from './Pages/CaseStudyDetail';
import BlogDetail from './Pages/BlogDetail';

function App() {
  return (
  <>
  <BrowserRouter>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookappointment" element={<Appointment />} />
        <Route path="/serviceDetail" element={<ServiceDetail />} />
        <Route path="/caseStudyDetail" element={<CaseStudyDetail />} />
        <Route path="/blogDetail" element={<BlogDetail/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
  </>
  );
}

export default App;
