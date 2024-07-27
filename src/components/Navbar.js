
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/hogwarts.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
<>
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
       
        <Link to="/" className="text-lg font-bold flex justify-center items-center "> <img src={logo} alt="logo" width={40} /> Hogwarts </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-lg hover:underline hover:text-green-300 transition duration-300 ease-in-out">Home</Link>
          <Link to="/about" className="text-lg hover:underline hover:text-green-300 transition duration-300 ease-in-out">About Us</Link>
          <Link to="/academics" className="text-lg hover:underline hover:text-green-300 transition duration-300 ease-in-out">Academics</Link>
          <Link to="/admissions" className="text-lg hover:underline hover:text-green-300 transition duration-300 ease-in-out">Admissions</Link>
          <Link to="/faculty" className="text-lg hover:underline hover:text-green-300 transition duration-300 ease-in-out">Faculty</Link>
          <Link to="/students" className="text-lg hover:underline hover:text-green-300 transition duration-300 ease-in-out">Students</Link>
          <Link to="/gallery" className="text-lg hover:underline hover:text-green-300 transition duration-300 ease-in-out">Gallery</Link>
          <Link to="/contact" className="text-lg hover:underline hover:text-green-300 transition duration-300 ease-in-out">Contact Us</Link>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col justify-center  items-center space-y-2">
          <Link to="/" className="block text-lg hover:underline hover:text-green-300 transition duration-300 ease-in-out">Home</Link>
          <Link to="/about" className="block text-lg hover:underline hover:text-green-300 transition duration-300 ease-in-out">About Us</Link>
          <Link to="/academics" className="block text-lg hover:underline hover:text-green-300 transition duration-300 ease-in-out">Academics</Link>
          <Link to="/admissions" className="block text-lg hover:underline hover:text-green-300 transition duration-300 ease-in-out">Admissions</Link>
          <Link to="/faculty" className="block text-lg hover:underline hover:text-green-300 transition duration-300 ease-in-out">Faculty</Link>
          <Link to="/students" className="block text-lg hover:underline hover:text-green-300 transition duration-300 ease-in-out">Students</Link>
          <Link to="/gallery" className="block text-lg hover:underline hover:text-green-300 transition duration-300 ease-in-out">Gallery</Link>
          <Link to="/contact" className="block text-lg hover:underline hover:text-green-300 transition duration-300 ease-in-out">Contact Us</Link>
        </div>
      )}
    </nav>
      
    </>
  );
};

export default Navbar;
