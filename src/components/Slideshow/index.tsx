// components/ImageSlider.js
"use client"
import { useState } from 'react';
import hoverCard from '../Common/hovercard';
import AnimatedHeadline from '../design/heading';

const images = [
  {
    src: '/images/slideshow/placement_pic3.jpg',
    caption: 'Placement ',
    message:'Dive into a World of Possibilities: Our College Prepares You for Success.'
  },
  {
    src: '/images/slideshow/playing_pic1.jpg',
    caption: 'A Place to Play',
    message:'Where Fun Meets Growth: Experience Our Engaging Learning Atmosphere'
  },
  {
    src: '/images/slideshow/reading_pic2.jpg',
    caption: 'Learning Environment',
    message:'Unleash Your Potential with Our Learning Experience'
  },
  // Add more images with captions as needed
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative mt-20">
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full"
        onClick={goToPrevious}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full"
        onClick={goToNext}
      >
        &gt;
      </button>
    <AnimatedHeadline title={"𝐋𝐢𝐟𝐞 𝐚𝐭 𝐎𝐆𝐈𝐅𝐓"} />

      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-3/4 mb-4 sm:mb-0">
          <div className="border-4 border-gray-500 rounded-lg overflow-hidden shadow-lg">
            <img
            
              src={images[currentIndex].src}
              alt={`Slide ${currentIndex + 1}`}
              className="block w-full h-auto"
            />
          </div>
        </div>
        <div className="w-full mx-auto my-auto sm:w-1/2 sm:my-auto sm:mx-auto ">
          <div className="bg-transparent text-white p-4 rounded-lg">
            <div className="card-container2" style={{ width: '350px', height: '350px' }}>
              <div className="card2">
                <div className="front-content2">
                  <p>{images[currentIndex].caption}</p>
                </div>
                <div className="content2">
                  <p className="heading2">Key Point</p>
                  <p>
                  {images[currentIndex].message}
                  </p>
                  
                </div>
                
              </div>

            </div>
            
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
