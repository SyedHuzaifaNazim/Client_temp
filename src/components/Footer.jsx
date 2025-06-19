const Footer = () => {
  return (
    <footer className="bg-secondary  py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold mb-4">
            <span className="text-primary">Medi</span>Care
          </div>
          < p className="mb-4">
            Providing you with the best healthcare services since 2010.
          </p>
          <p>
            ©MediCare 2023. All rights reserved
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className=" hover:text-primary transition">About</a></li>
            <li><a href="#" className=" hover:text-primary transition">Testimonials</a></li>
            <li><a href="#" className=" hover:text-primary transition">Find a doctor</a></li>
            <li><a href="#" className=" hover:text-primary transition">Apps</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Region</h3>
          <ul className="space-y-2">
            <li><a href="#" className=" hover:text-primary transition">Indonesia</a></li>
            <li><a href="#" className=" hover:text-primary transition">Singapore</a></li>
            <li><a href="#" className=" hover:text-primary transition">Hongkong</a></li>
            <li><a href="#" className=" hover:text-primary transition">Canada</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className=" hover:text-primary transition">Help center</a></li>
            <li><a href="#" className=" hover:text-primary transition">Contact support</a></li>
            <li><a href="#" className=" hover:text-primary transition">Instructions</a></li>
            <li><a href="#" className=" hover:text-primary transition">How it works</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer