import React from 'react';

function SimpleBlog() {
  // List of blog data
  const blogData = [
    {
      id: 1,
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1200,h_630/https://www.excitel.com/wp-content/uploads/2024/12/10.-Blog-Banners-December-10.png",
      author: "Team Excitel Dec 04th 2024",
      title: "The Best Broadband Plans in Hyderabad: What Makes Excitel Stand Out",
      description: "The demand for high-speed and affordable broadband has surged in Hyderabad, driven by the growing need for fast and reliable internet connectivity for work, education, and entertainment. Excitel, a leading broadband service provider in Hyderabad, offers some of the best broadband plans that cater to the needs of both individuals and businesses..."
    },
    {
      id: 2,
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1200,h_630/https://www.excitel.com/wp-content/uploads/2024/12/10.-Blog-Banners-December-10.png",
      author: "Team Excitel Dec 04th 2024",
      title: "The Future of Broadband: Trends to Watch in 2025",
      description: "As the demand for high-speed internet continues to grow, broadband technologies are evolving rapidly. In 2025, we are likely to see even more exciting developments in the broadband industry. From faster speeds to improved reliability, here are the key trends that will shape the future of broadband."
    },
    {
      id: 3,
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1200,h_630/https://www.excitel.com/wp-content/uploads/2024/12/10.-Blog-Banners-December-10.png",
      author: "Team Excitel Dec 04th 2024",
      title: "Why Excitel is the Top Choice for Internet Users",
      description: "Excitel is known for providing fast and affordable broadband services, but what really sets them apart is their commitment to customer satisfaction. With tailored plans and excellent support, Excitel continues to be a top choice for internet users across the country."
    }
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
     <div className='md:w-[80%] mx-auto'>
     <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-orange-600">Blogs</h2>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Map over the blogData array to render each blog post */}
        {blogData.map((blog) => (
          <div key={blog.id} className="bg-white  rounded-lg shadow-lg">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto rounded-lg"
            />
<div className='px-6'>
<p className="text-sm text-gray-500 mt-2">{blog.author}</p>
            <h3 className="text-xl font-semibold text-orange-600 mt-4">{blog.title}</h3>
            <p className="text-gray-600 mt-2">{blog.description}</p>
    </div>
          </div>
        ))}
      </div>
        </div>
    </div>
  );
}

export default SimpleBlog;
