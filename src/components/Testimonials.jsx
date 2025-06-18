const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Patient',
      content: 'The doctors at MediCare are truly exceptional. They took the time to listen to my concerns and provided personalized care that made all the difference in my recovery.',
      image: '/images/patient1.jpg'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'Patient',
      content: 'I was nervous about my procedure, but the staff made me feel comfortable and well-informed throughout the entire process. Highly recommend their services!',
      image: '/images/patient2.jpg'
    },
    {
      id: 3,
      name: 'David Johnson',
      role: 'Patient',
      content: 'The online consultation feature saved me so much time. I could get professional medical advice without leaving my home during my busy schedule.',
      image: '/images/patient3.jpg'
    }
  ]

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-secondary mb-4 text-center">What our customers are saying</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-6">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials