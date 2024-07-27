
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

const Home = () => {
 
  return (
    <div className="home-page min-h-screen bg-gray-100">
      {/* Carousel Section */}
      <Carousel />

      {/* Quick Links Section */}
      <section className="quick-links p-4 md:p-8">
        <div className="container mx-auto text-2xl font-semibold grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/about" className="bg-blue-500 text-white p-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300">
            About Us
          </Link>
          <Link to="/academics" className="bg-green-500 text-white p-4 rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-300">
            Academics
          </Link>
          <Link to="/admissions" className="bg-red-500 text-white p-4 rounded-lg shadow-lg hover:bg-red-600 transition-colors duration-300">
            Admissions
          </Link>
          <Link to="/contact" className="bg-purple-500 text-white p-4 rounded-lg shadow-lg hover:bg-purple-600 transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
