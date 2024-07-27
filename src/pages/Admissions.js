
import React from 'react';
import { HiDocumentDownload, HiCalendar } from 'react-icons/hi';

const Admissions = () => (
  <div className="admissions-page bg-gradient-to-r from-red-300 to-blue-200 min-h-screen p-6 lg:p-12">
    <div className="container  ">
    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 border-b-4 border-gray-800 pb-2">Admission</h1>

      
      <section className="process mb-12  bg-orange-400 shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <HiCalendar className="text-blue-600 mr-3" /> Admission Process
        </h2>
        <p className="text-gray-900 text-lg leading-relaxed">
          {/* Add details about the admission process here */}
          Our admission process is designed to be straightforward and efficient. We invite you to explore our requirements and prepare your application with care. For more detailed information, please refer to our guidelines and steps outlined below.
        </p>
      </section>
      
      <section className="forms mb-12 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
          <HiDocumentDownload className="text-blue-600 mr-3" /> Admission Forms
        </h2>
        <a 
          href="./images/form.pdf" 
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out  items-center justify-center"
          download
        >
          Download Admission Form
        </a>
      </section>
      
      <section className="important-dates text-lg bg-green-500 shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
          <HiCalendar className="text-blue-600 mr-3" /> Important Dates
        </h2>
        <p className="text-gray-900 leading-relaxed mb-4">
          {/* Add important dates and deadlines here */}
          Keep track of key dates to ensure your application is submitted on time. Here are some important deadlines to remember:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Application Deadline:</strong> June 15, 2024</li>
          <li><strong>Entrance Exam:</strong> July 10, 2024</li>
          <li><strong>Interview Date:</strong> July 20, 2024</li>
          <li><strong>Final Decision:</strong> August 1, 2024</li>
        </ul>
      </section>
    </div>
  </div>
);

export default Admissions;
