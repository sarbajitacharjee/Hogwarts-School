import React, { useState } from 'react';

const GalleryFilter = ({ setFilters }) => {
  const [type, setType] = useState('');
  const [date, setDate] = useState('');

  const handleFilterChange = () => {
    if (typeof setFilters === 'function') {
      setFilters({ type, date });
    } else {
      console.error('setFilters is not a function');
    }
  };

  return (
    <div className="filter-container">
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="">All Types</option>
        <option value="event">Event</option>
        <option value="activity">Activity</option>
      </select>
      <input 
        type="date" 
        value={date} 
        onChange={e => setDate(e.target.value)}
      />
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default GalleryFilter;
