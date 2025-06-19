const Hero = () => {
  // Primary and backup image URLs from reliable sources
  const heroImages = {
    primary: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    backup: "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-gown_23-2149611198.jpg"
  };

  return (
    <div className="relative h-screen min-h-[500px] max-h-[800px] w-full overflow-hidden">
      {/* Background Image with double fallback */}
      <div className="absolute inset-0 bg-gray-800"> {/* Fallback background color */}
        <img
          src={heroImages.primary}
          alt="Doctor consulting with patient"
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = heroImages.backup;
          }}
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content centered with proper spacing */}
      <div className="container relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            Virtual healthcare for you
          </h1>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
          </p>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
            aria-label="Book a consultation"
          >
            Consult today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;