
import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import schoolevent1 from '../assets/schoolevent1.jpg'
import schoolevent2 from '../assets/schoolevent2.jpg'
import schoolevent3 from '../assets/schoolevent3.jpg'
import schoolevent4 from '../assets/schoolevent4.jpg'
import schoolevent5 from '../assets/schoolevent5.jpg'
import schoolevent6 from '../assets/schoolevent6.jpg'
import schoolevent7 from '../assets/schoolevent7.jpg'
import schoolevent8 from '../assets/schoolevent8.jpg'
import schoolevent9 from '../assets/schoolevent9.jpg'
import schoolevent10 from '../assets/schoolevent10.jpg'
const Carousel = () => (
  <ResponsiveCarousel showArrows autoPlay infiniteLoop>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src={schoolevent1} alt="Event 1" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800    md:block text-white p-2 rounded">Railway Station to Hogwarts</p>
    </div>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src={schoolevent2} alt="Event 2" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800    md:block text-white p-2 rounded">Train To Hogwarts</p>
    </div>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src={schoolevent3} alt="Event 3" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800    md:block text-white p-2 rounded">Hogwarts Castle</p>
    </div>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src={schoolevent4} alt="Event 4" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800    md:block text-white p-2 rounded">Magic Room</p>
    </div>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src={schoolevent5} alt="Event 5" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800    md:block text-white p-2 rounded">Stationary Shop</p>
    </div>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src={schoolevent6} alt="Event 6" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800    md:block text-white p-2 rounded">Welcome Letters</p>
    </div>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src={schoolevent7} alt="Event 7" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800    md:block text-white p-2 rounded">Way TO Hogwarts</p>
    </div>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src={schoolevent8} alt="Event 8" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800    md:block text-white p-2 rounded">Big Watch tower</p>
    </div>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src={schoolevent9} alt="Event 9" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800    md:block text-white p-2 rounded">Uniform</p>
    </div>
    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
      <img src={schoolevent10} alt="Event 10" className="h-full w-full object-contain" />
      <p className="legend bg-gray-800    md:block text-white p-2 rounded">Dress For different Catagories</p>
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
