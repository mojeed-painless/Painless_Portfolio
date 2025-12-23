import Navbar from '../sections/navbar/Navbar.jsx';
import Header from '../sections/header/Header.jsx';
import About from '../sections/about/About.jsx';
import Services from '../sections/services/Services.jsx';
import Portfolio from '../sections/portfolio/Portfolio.jsx';
import Testimonials from '../sections/testimonials/Testimonials.jsx';
import FAQS from '../sections/faqs/FAQS.jsx';
import Contact from '../sections/contact/Contact.jsx';
import Footer from '../sections/footer/Footer.jsx';
import FloatingNav from '../sections/floating-nav/FloatingNav.jsx';

function App() {
  
  return (
    <main>
      <Navbar/>
      <Header />
      <About />
      <Services />
      <Portfolio />
      {/* <Testimonials />
      <FAQS /> */}
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
    
  )
}

export default App
