import image from '../assets/360_F_133334155_X23HzbJKawbIgXVaub4bPM8CjpkS5uMS.jpg';

const Hero = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt="Healthcare background" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content */}
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