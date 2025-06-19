import image1 from '../assets/3112b9f03ae27c290e811dd6f4163d20.jpg'
import image2 from '../assets/premium_photo-1661580574627-9211124e5c3f.jpeg'
import image3 from '../assets/dr.jpg'
import image4 from '../assets/profile-picture-smiling-old-male-600nw-1769847965.webp'

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      image: image2  // Removed the curly braces
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      image: image1  // Removed the curly braces
    },
    {
      id: 3,
      name: 'Dr. Emily Wilson',
      specialty: 'Pediatrician',
      image: image3  // Removed the curly braces
    },
    {
      id: 4,
      name: 'Dr. Robert Garcia',
      specialty: 'Dermatologist',
      image: image4  // Removed the curly braces
    }
  ]

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-secondary mb-4">Our leading doctors</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Meet our team of highly qualified healthcare professionals dedicated to providing you with the best medical care.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map(doctor => (
            <div key={doctor.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img src={doctor.image} alt={doctor.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary">{doctor.name}</h3>
                <p className="text-primary mt-2">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-12 bg-primary hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition duration-300">
          View all doctors
        </button>
      </div>
    </section>
  )
}

export default Doctors