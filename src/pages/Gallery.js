/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import GalleryFilter from '../components/GalleryFilter';
import GalleryItem from '../components/GalleryItem ';

// Sample data
const sampleData = [
  { id: 1, type: 'event', date: '2024-07-24', media: './images/schoolevent2.jpg' },
  { id: 2, type: 'activity', date: '2024-07-24', media: './images/schoolevent3.jpg' },
  { id: 2, type: 'event', date: '2024-01-01', media: './images/schoolevent5.jpg' },
  { id: 2, type: 'activity', date: '2024-01-01', media: './images/schoolevent7.jpg' },
  // Add more items
];

const GalleryPage = () => {
  const [items, setItems] = useState(sampleData);
  const [filteredItems, setFilteredItems] = useState(items);
  const [filters, setFilters] = useState({ type: '', date: '' });

  useEffect(() => {
    // Filter items based on selected filters
    const { type, date } = filters;
    const result = items.filter(item => 
      (!type || item.type === type) &&
      (!date || item.date === date)
    );
    setFilteredItems(result);
  }, [filters, items]);

  return (
    <div>
      <GalleryFilter setFilters={setFilters} />
      <div className="gallery-grid">
        {filteredItems.map(item => (
          <GalleryItem key={item.id} media={item.media} />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
