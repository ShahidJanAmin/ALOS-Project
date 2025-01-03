"use client"
import React, { useState, useEffect } from 'react';

const UserTestimonial = () => {
  // Reviews Data
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      review: 'Excitel has been amazing! The internet speed is fast, and I rarely face any downtime.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Excellent customer service and great connection. Highly recommend Excitel to everyone!',
    },
    {
      id: 3,
      name: 'Ali Khan',
      review: 'The best internet provider I have ever had. Reliable, fast, and affordable!',
    },
    {
        id: 4,
        name: 'Jane Smith',
        review: 'Excellent customer service and great connection. Highly recommend Excitel to everyone!',
      },
      {
        id: 5,
        name: 'Ali Khan',
        review: 'The best internet provider I have ever had. Reliable, fast, and affordable!',
      },
      {
        id: 6,
        name: 'Jane Smith',
        review: 'Excellent customer service and great connection. Highly recommend Excitel to everyone!',
      },
      {
        id: 7,
        name: 'Ali Khan',
        review: 'The best internet provider I have ever had. Reliable, fast, and affordable!',
      },
  ];

  // State to track the active review
  const [currentReview, setCurrentReview] = useState(0);

  // Set up automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [reviews.length]);

  // Function to go to the next review manually
  const goToReview = (index) => {
    setCurrentReview(index);
  };

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-orange-600">USER TESTIMONIAL</h2>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Testimonial content */}
        <div className="w-full max-w-2xl bg-orange-600 p-6 rounded-lg shadow-lg">
          <p className="text-white mb-4">{reviews[currentReview].review}</p>
          <h4 className="text-lg font-semibold text-white/70">{reviews[currentReview].name}</h4>
        </div>

        {/* Dots navigation */}
        <div className="flex mt-6 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentReview === index ? 'bg-orange-600' : 'bg-gray-400'}`}
              onClick={() => goToReview(index)} // Go to specific review when dot is clicked
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTestimonial;
