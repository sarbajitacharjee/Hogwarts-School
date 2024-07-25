import React from 'react';
import Cards from '../components/Cards';
const Faculty = () => (
  <div className="faculty-page p-8 bg-gradient-to-r from-red-300 to-blue-200 min-h-screen">
    <h1 className="text-4xl font-bold text-center mb-8">Our Esteemed Faculty</h1>
    <section className="faculty-profiles">
      <h2 className="text-2xl font-semibold mb-6 text-center">Meet Our Professors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example faculty profile */}
        
        
        <Cards/>
        <Cards/>
        <Cards/>
        
        </div>
    </section>
  </div>
);

export default Faculty;
