/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="contact-page p-8 min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <div className="flex flex-col md:flex-row mb-8">
        <div className="contact-info md:w-1/2 p-6 bg-gradient-to-l from-red-300 to-blue-200 text-xl rounded-lg shadow-lg mb-8 md:mb-0 md:mr-4">
          <h2 className="text-3xl font-semibold mb-4 ">
            Our Contact Information
          </h2>
          <div className="mb-4">
            <HiLocationMarker className="inline-block text-2xl text-blue-500" />
            <span className="text-gray-700 ml-2">
              123 Magic Avenue, Hogwarts
            </span>
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
            <input
              type="text"
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Message</span>
            <textarea
              className="form-textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              rows="4"
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Send
          </button>
        </form>
      </div>

      {/* ==================== Goggle Map ====================== */}
      <div className="google-map bg-purple-200 m-20 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-center">
            Visit Our Location on Google Maps
          </h2>
        <div style={{ width: "100%", height: "400px" }}>
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2473.320412388956!2d-0.4181051!3d51.6905814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48764103e950758d%3A0x2b152593ceb59b52!2sHogwarts%20Castle!5e0!3m2!1sen!2sin!4v1722068570802!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{border: "5" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
