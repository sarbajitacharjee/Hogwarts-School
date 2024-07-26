/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import GalleryFilter from '../components/GalleryFilter';
import GalleryItem from '../components/GalleryItem ';
import schoolevent2 from  '../assets/schoolevent2.jpg'
import schoolevent1 from  '../assets/schoolevent1.jpg'
import schoolevent7 from  '../assets/schoolevent7.jpg'
import schoolevent6 from  '../assets/schoolevent6.jpg'
import schoolevent4 from  '../assets/schoolevent4.jpg'
// Sample data
const sampleData = [
  { id: 1, type: 'event', date: '2024-07-24', media: schoolevent2 },
  { id: 2, type: 'activity', date: '2024-07-24', media: schoolevent1 },
  { id: 2, type: 'event', date: '2024-01-01', media: schoolevent6 },
  { id: 2, type: 'activity', date: '2024-01-01', media: schoolevent7 },
  { id: 2, type: 'activity', date: '2024-01-01', media: schoolevent4 },
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
