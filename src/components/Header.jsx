import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of your hero section (adjust 600 to match your hero height)
      const heroHeight = 600
      setIsFixed(window.scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Normal header that appears below hero */}
      <header className={`w-full ${isFixed ? 'fixed top-0 z-50 shadow-lg animate-slideDown' : 'relative'} bg-white transition-all duration-300`}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex justify-between items-center py-4">
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
        </div>
      </header>

      {/* Add this to your global CSS */}
      <style jsx>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default Header