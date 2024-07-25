// src/pages/Admissions.js
import React from 'react';

const Admissions = () => (
  <div className="admissions-page p-4 md:p-8 bg-gray-50 min-h-screen">
    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Admissions</h1>
    
    <section className="process mb-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Admission Process</h2>
      <p className="text-gray-700 leading-relaxed">
        {/* Add details about the admission process here */}
        Our admission process is designed to be straightforward and efficient. We invite you to explore our requirements and prepare your application with care. For more detailed information, please refer to our guidelines and steps outlined below.Hogwarts School of Witchcraft and Wizardry.
      </p>
    </section>
    
    <section className="forms mb-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Admission Forms</h2>
      <a 
        href="/path/to/form.pdf" 
        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
        download
      >
        Download Admission Form
      </a>
    </section>
    
    <section className="important-dates">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Important Dates</h2>
      <p className="text-gray-700 leading-relaxed">
        {/* Add important dates and deadlines here */}
        Keep track of key dates to ensure your application is submitted on time. Here are some important deadlines to remember:
        <ul className="list-disc pl-5 mt-3">
          <li><strong>Application Deadline:</strong> June 15, 2024</li>
          <li><strong>Entrance Exam:</strong> July 10, 2024</li>
          <li><strong>Interview Date:</strong> July 20, 2024</li>
          <li><strong>Final Decision:</strong> August 1, 2024</li>
        </ul>
      </p>
    </section>
  </div>
);

export default Admissions;
