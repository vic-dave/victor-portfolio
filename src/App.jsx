import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume';
import Projects from './components/Projects'
import Testimonials from './components/Testimonials';
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css';


function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
