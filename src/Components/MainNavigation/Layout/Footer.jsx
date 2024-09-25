
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-bold mb-2">About Us</h5>
            <p className="text-sm">
              We are a team of passionate developers creating amazing web experiences.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-bold mb-2">Quick Links</h5>
            <ul className="text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h5 className="text-lg font-bold mb-2">Contact Us</h5>
            <p className="text-sm">
              Email: yogichi95@gmail.com<br />
              Phone: +91 8600905502
            </p>
            <div className="mt-4">
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
