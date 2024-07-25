// src/components/ContactForm.js
import React from 'react';

const ContactForm = () => (
  <form className="contact-form p-4 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
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
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Send</button>
  </form>
);

export default ContactForm;
