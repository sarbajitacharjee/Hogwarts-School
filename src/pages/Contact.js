import React from 'react';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Contact = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <div className="contact-page p-8 min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <div className="flex flex-col md:flex-row mb-8">
        <div className="contact-info md:w-1/2 p-6 bg-gradient-to-l from-red-300 to-blue-200 text-xl rounded-lg shadow-lg mb-8 md:mb-0 md:mr-4">
          <h2 className="text-3xl font-semibold mb-4 ">Our Contact Information</h2>
          <div className="mb-4">
            <HiLocationMarker className="inline-block text-2xl text-blue-500" />
            <span className="text-gray-700 ml-2">123 Magic Avenue, Hogwarts</span>
          </div>
          <div className="mb-4">
            <HiPhone className="inline-block text-2xl text-blue-500" />
            <span className="text-gray-700 ml-2">+123-456-7890</span>
          </div>
          <div className="mb-4">
            <HiMail className="inline-block text-2xl text-blue-500" />
            <span className="text-gray-700 ml-2">contact@hogwarts.edu</span>
          </div>
        </div>
        <form className="contact-form md:w-1/2 p-6 bg-gradient-to-r from-red-300 to-blue-200 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <label className="block mb-4">
            <span className="text-gray-700">Name</span>
            <input type="text" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input type="email" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Message</span>
            <textarea className="form-textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows="4"></textarea>
          </label>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">Send</button>
        </form>
      </div>
      <div className="google-map bg-green-300 rounded-lg shadow-lg">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Contact;
