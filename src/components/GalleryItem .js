import React from 'react';

const GalleryItem = ({ media }) => {
  const isVideo = media.endsWith('.mp4');

  return (
    <div className="gallery-item">
      {isVideo ? (
        <video controls src={media} />
      ) : (
        <img src={media} alt="Gallery item" />
      )}
    </div>
  );
};

export default GalleryItem;
