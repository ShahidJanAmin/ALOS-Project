"use client";

import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons

const Slider = () => {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1731432245362-26f9c0f1ba2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D', // Example image
      title: 'Slide 1 Title',
      caption: 'This is the caption for slide 1.',
    },
    {
      image: 'https://images.unsplash.com/photo-1735689978278-c3400952ddda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D2', // Example image
      title: 'Slide 2 Title',
      caption: 'This is the caption for slide 2.',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1734549547896-1625c30d004e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D', // Example image
      title: 'Slide 3 Title',
      caption: 'This is the caption for slide 3.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length); // Cycle through slides
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // Cycle through slides in reverse
  };

  return (
    <div className="relative max-w-full">
      {/* Slide Image */}
      <div className="relative">
        <img
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-96 object-cover rounded-md"
        />
        {/* Title and Caption */}
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-2xl font-semibold">{slides[currentSlide].title}</h2>
          <p className="text-lg">{slides[currentSlide].caption}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
      >
        <FaArrowLeft className="text-black" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
      >
        <FaArrowRight className="text-black" />
      </button>

      {/* Slide Indicator Circles */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
