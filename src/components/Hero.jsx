const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight mb-4">
            Virtual healthcare for you
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
          </p>
          <button className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition duration-300">
            Consult today
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/images/hero-image.png" 
            alt="Healthcare illustration" 
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero