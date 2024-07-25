
import React from 'react';
import GalleryFilter from '../components/GalleryFilter';

const Gallery = () => (
  <div className="gallery-page p-8">
    <h1 className="text-3xl font-bold mb-4">Gallery</h1>
    <GalleryFilter />
    <section className="gallery-items mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example gallery item */}
        <div className="gallery-item bg-gray-200 p-4 rounded-lg shadow-lg">
          <img src="./images/schoolevent1.jpg" alt="Event 1" className="w-full h-auto mb-6 object-cover rounded" />
          <img src="./images/schoolevent2.jpg" alt="Event 2" className="w-full h-auto object-cover rounded" />
          <p className="text-gray-700 mt-2">Event 1</p>
        </div>
        {/* Add more gallery items as needed */}
      </div>
    </section>
  </div>
);

export default Gallery;
