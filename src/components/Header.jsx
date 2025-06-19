import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white shadow-sm py-4'} px-6 md:px-12 lg:px-24`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-secondary font-bold text-2xl">
            <span className="text-primary">Medi</span>Care
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-secondary font-medium hover:text-primary transition-colors">Home</a>
          <a href="#" className="text-secondary font-medium hover:text-primary transition-colors">Find a doctor</a>
          <a href="#" className="text-secondary font-medium hover:text-primary transition-colors">Apps</a>
          <a href="#" className="text-secondary font-medium hover:text-primary transition-colors">Testimonials</a>
          <a href="#" className="text-secondary font-medium hover:text-primary transition-colors">About us</a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 space-y-2 pb-4">
          <a href="#" className="block py-2 text-secondary font-medium hover:text-primary transition-colors">Home</a>
          <a href="#" className="block py-2 text-secondary font-medium hover:text-primary transition-colors">Find a doctor</a>
          <a href="#" className="block py-2 text-secondary font-medium hover:text-primary transition-colors">Apps</a>
          <a href="#" className="block py-2 text-secondary font-medium hover:text-primary transition-colors">Testimonials</a>
          <a href="#" className="block py-2 text-secondary font-medium hover:text-primary transition-colors">About us</a>
        </nav>
      )}
    </header>
  )
}

export default Header