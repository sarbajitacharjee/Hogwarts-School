
import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel = () => (
  <ResponsiveCarousel showArrows autoPlay infiniteLoop>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src="./images/schoolevent1.jpg" alt="Event 1" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800  md:block text-white p-2 rounded">Railway Station to Hogwarts</p>
    </div>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src="./images/schoolevent2.jpg" alt="Event 2" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800  md:block text-white p-2 rounded">Train To Hogwarts</p>
    </div>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src="./images/schoolevent3.jpg" alt="Event 3" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800  md:block text-white p-2 rounded">Hogwarts Castle</p>
    </div>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src="./images/schoolevent4.jpg" alt="Event 4" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800  md:block text-white p-2 rounded">Magic Room</p>
    </div>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src="./images/schoolevent5.jpg" alt="Event 5" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800  md:block text-white p-2 rounded">Stationary Shop</p>
    </div>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src="./images/schoolevent6.jpg" alt="Event 6" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800  md:block text-white p-2 rounded">Welcome Letters</p>
    </div>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src="./images/schoolevent7.jpg" alt="Event 7" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800  md:block text-white p-2 rounded">Way TO Hogwarts</p>
    </div>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src="./images/schoolevent8.jpg" alt="Event 8" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800  md:block text-white p-2 rounded">Big Watch tower</p>
    </div>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src="./images/schoolevent9.jpg" alt="Event 9" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800  md:block text-white p-2 rounded">Uniform</p>
    </div>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src="./images/schoolevent10.jpg" alt="Event 10" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800  md:block text-white p-2 rounded">Dress For different Catagories</p>
    </div>
    
    {/* <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
  <video className="h-full w-full object-cover" controls>
    <source src="./images/schoolvideo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <p className="legend bg-gray-800 md:block text-white p-2 rounded">Uniform</p>
</div> */}

  </ResponsiveCarousel>
);

export default Carousel;
