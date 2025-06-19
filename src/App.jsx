import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Doctors from './components/Doctors'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-poppins">
      <Hero />
      <Header />
      <Services />
      <Doctors />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App