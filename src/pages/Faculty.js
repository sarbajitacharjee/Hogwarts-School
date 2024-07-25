
import React from 'react';

const Faculty = () => (
  <div className="faculty-page p-8">
    <h1 className="text-3xl font-bold mb-4">Faculty</h1>
    <section className="faculty-profiles">
      <h2 className="text-2xl font-semibold mb-2">Faculty Profiles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example faculty profile */}
        <div className="profile bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Dr. Jane Doe</h3>
          <p className="text-gray-700">Qualifications and experience details...</p>
        </div>
        {/* Add more profiles as needed */}
      </div>
    </section>
  </div>
);

export default Faculty;
