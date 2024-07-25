
import React from 'react';
import '../index.css'
const Academics = () => (
  <div className="academics-page p-4 md:p-8  bg-gradient-to-r from-red-300 to-blue-200  min-h-screen">
    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 border-b-4 border-gray-800 pb-2">Academics</h1>
    
    <section className="curriculum mb-8 bg-orange-400 text-lg shadow-lg rounded-lg p-4 md:p-6 lg:p-8">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Curriculum</h2>
      <p className="text-gray-900 leading-relaxed">
        The Hogwarts curriculum provides a comprehensive magical education over seven years, starting from age eleven. The first five years cover core subjects, with the final two years allowing students to specialize in electives according to their interests. This approach ensures a broad yet tailored magical education.
      </p>
    </section>
    
    <section className="subjects mb-8 bg-blue-400 text-lg shadow-lg rounded-lg p-4 md:p-6 lg:p-8">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Subjects</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-900">
        <li><strong>Charms:</strong> The study of spells and their practical applications.</li>
        <li><strong>Defense Against the Dark Arts:</strong> Techniques to protect against dark magic.</li>
        <li><strong>Herbology:</strong> Study of magical plants and their properties.</li>
        <li><strong>Potions:</strong> The art of potion-making and its effects.</li>
        <li><strong>Transfiguration:</strong> Magical transformation of objects and creatures.</li>
        <li><strong>Astronomy:</strong> Study of stars, planets, and their movements.</li>
        <li><strong>History of Magic:</strong> History of the magical world.</li>
        <li><strong>Care of Magical Creatures:</strong> Study and care of magical creatures.</li>
        <li><strong>Divination:</strong> The art of predicting the future.</li>
        <li><strong>Arithmancy:</strong> Magical properties of numbers.</li>
        <li><strong>Ancient Runes:</strong> Ancient magical scripts.</li>
        <li><strong>Muggle Studies:</strong> Understanding the non-magical world.</li>
        <li><strong>Flying:</strong> Lessons on broomstick flying.</li>
      </ul>
    </section>
    
    <section className="methodologies bg-green-400 text-lg  shadow-lg rounded-lg p-4 md:p-6 lg:p-8">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Teaching Methodologies</h2>
      <p className="text-gray-900 leading-relaxed">
        Hogwarts employs diverse teaching methods to ensure an engaging and effective learning experience. These include interactive lectures, practical demonstrations, hands-on activities, and fieldwork. Students benefit from a blend of traditional and experiential learning, fostering both theoretical knowledge and practical skills. Independent research and extracurricular activities further enhance their magical education.
      </p>
    </section>
  </div>
);

export default Academics;
