import React from 'react';

function Blog() {
  return (
    <div className='bg-white/50 w-full'>
      <div className="space-y-10 md:w-[80%] w-full mx-auto px-2">
        {/* First Blog - Image on the Left, Text on the Right */}
        <div className="flex flex-col sm:flex-row items-center space-x-8">
          <div className="w-full sm:w-1/2">
            <img
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_699/https://www.excitel.com/wp-content/uploads/2022/11/We-always-deliver.png"
              alt="We always deliver"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-b-orange-600 w-1/2 pb-2">We always deliver!</h2>
            <p>
              We know you love your online content and we, as your go-to local internet/Wi-Fi provider, have tied up with most of the prominent media providers as our peers! Google Peering (YouTube & Google Play), Microsoft Peering (Windows and Xbox Updates and Apps), Extreme Peering (high-speed Web browsing and P2P transfers), Akamai (Facebook, Live Cricket), Netflix and many more Indian and foreign video-related services are now just a click away.
            </p>
          </div>
        </div>

        {/* Second Blog - Text on the Left, Image on the Right */}
        <div className="flex flex-col-reverse sm:flex-row items-center space-x-8 sm:mt-5">
          <div className="w-full sm:w-1/2">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-b-orange-600 w-1/2 pb-2">We practice empathy</h2>
            <p>
              Your requests, queries or complaints, early in the day or late in the evening, we, the best local net provider near you, got your back, Bruh! If you feel something didn’t go well, open a ticket via our mobile app and we will rectify it ASAP. You are our bae, and you’ll have a great connection every day.
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <img
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_699/https://www.excitel.com/wp-content/uploads/2022/11/We-practice-empathy.png"
              alt="We practice empathy"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
