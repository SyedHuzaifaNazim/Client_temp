const Services = () => {
  const services = [
    {
      icon: '🔍',
      title: 'Search doctor',
      description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals'
    },
    {
      icon: '💊',
      title: 'Online pharmacy',
      description: 'Buy your medicines with our mobile application with a simple delivery system'
    },
    {
      icon: '📋',
      title: 'Consultation',
      description: 'Free consultation with our trusted doctors and get the best recommendations'
    },
    {
      icon: 'ℹ️',
      title: 'Details info',
      description: 'Free consultation with our trusted doctors and get the best recommendations'
    },
    {
      icon: '🩹',
      title: 'Emergency care',
      description: 'You can get 24/7 urgent care for yourself or your children and your lovely family'
    },
    {
      icon: '📊',
      title: 'Tracking',
      description: 'Track and save your medical history and health data'
    }
  ]

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-secondary mb-4">Our services</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We provide to you the best choices for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <button className="mt-12 border-2 border-primary text-primary font-medium py-3 px-8 rounded-full hover:bg-primary hover:text-white transition duration-300">
          Learn more
        </button>
      </div>
    </section>
  )
}

export default Services