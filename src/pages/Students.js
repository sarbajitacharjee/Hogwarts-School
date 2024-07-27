import React from 'react';
import award from '../assets/award.avif'
import club from '../assets/clubs.png'
import sports from '../assets/sports.webp'
import gold from '../assets/gold.jpg'
import award2 from '../assets/extra.jpg'

const Students = () => (
  <div className="students-page p-6 lg:p-12 bg-gradient-to-r from-red-300 to-blue-200 min-h-screen">
    
    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 border-b-4 border-gray-800 pb-2">Students Carrer</h1>
    
    {/* Student Life Section */}
    <section className="student-life mb-12">
      <h2 className="text-3xl font-semibold mb-4 text-blue-700">Student Life</h2>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg mb-6 lg:mb-0">
          <img src={award} alt='Extracurricular Activities' className="w-full h-64 rounded-lg mb-4"/>
          <h3 className="text-2xl font-semibold mb-3">Extracurricular Activities</h3>
          <p className="text-gray-700 leading-relaxed">
            Our students engage in a wide range of extracurricular activities, from sports and arts to academic clubs. These activities enhance their learning experience and provide opportunities for personal growth and development.
          </p>
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <img src={club} alt='Clubs and Societies' className="w-full h-64  mb-4 object-contain md:object-contain"/>
          <h3 className="text-2xl font-semibold mb-3">Clubs and Societies</h3>
          <p className="text-gray-700 leading-relaxed">
            With numerous clubs and societies to choose from, students can pursue their passions, whether it’s debating, coding, or environmental activism. These groups foster collaboration and leadership skills.
          </p>
        </div>
      </div>
    </section>
    
    {/* Achievements Section */}
    <section className="achievements mb-12">
      <h2 className="text-3xl font-semibold mb-4 text-red-700">Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Achievement */}
        <div className="achievement bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={award2} alt='National Science Fair Winner' className="w-full h-40 object-cover rounded-lg mb-4"/>
          <h3 className="text-xl font-semibold mb-2">National Science Fair Winner</h3>
          <p className="text-gray-700">
            Our students won the first prize at the National Science Fair with their innovative project on renewable energy.
          </p>
        </div>
        {/* Example Achievement */}
        <div className="achievement bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={gold} alt='Art Competition Gold Medal' className="w-full h-40 object-cover rounded-lg mb-4"/>
          <h3 className="text-xl font-semibold mb-2">Art Competition Gold Medal</h3>
          <p className="text-gray-700">
            An award-winning art piece created by our student was recognized at the National Art Competition.
          </p>
        </div>
        {/* Example Achievement */}
        <div className="achievement bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={sports} alt='Top Sports Performer' className="w-full h-40  rounded-lg mb-4"/>
          <h3 className="text-xl font-semibold mb-2">Top Sports Performer</h3>
          <p className="text-gray-700">
            Our athletics team achieved top positions in several regional sports events this year.
          </p>
        </div>
      </div>
    </section>
    
    {/* Student Council Section */}
    <section className="student-council mb-12">
      <h2 className="text-3xl font-semibold mb-4 text-purple-700">Student Council</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-3">Leadership Opportunities</h3>
        <p className="text-gray-700 leading-relaxed">
          The Student Council is a vital part of our school’s governance. It provides students with the opportunity to lead, organize events, and advocate for their peers. Participation in the council fosters skills in leadership, public speaking, and teamwork.
        </p>
      </div>
    </section>
  </div>
);

export default Students;
