const Hero = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image - Using image from public folder */}
      <div className="absolute inset-0">
        <img 
          src="/medical-hero.jpg"  // Image must be in your public folder
          alt="Healthcare background" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content remains same */}
      <div className="container mx-auto relative z-10 h-full flex items-center px-6 md:px-12 lg:px-24">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Virtual healthcare for you
          </h1>
          <p className="text-lg mb-8 text-gray-100">
            Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
          </p>
          <button className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition duration-300">
            Consult today
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero