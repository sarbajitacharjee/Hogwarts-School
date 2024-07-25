// src/components/GalleryFilter.js
import React from 'react';

const GalleryFilter = () => (
  <div className="gallery-filter mb-8">
    <h2 className="text-xl font-semibold mb-4">Filter Gallery</h2>
    <form className="flex flex-col space-y-4">
      <label className="block">
        <span className="text-gray-700">Event Type</span>
        <select className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm">
          <option value="">All Events</option>
          <option value="sports">Sports</option>
          <option value="cultural">Cultural</option>
          <option value="academic">Academic</option>
        </select>
      </label>
      <label className="block">
        <span className="text-gray-700">Date</span>
        <input type="date" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Apply Filters</button>
    </form>
  </div>
);

export default GalleryFilter;
