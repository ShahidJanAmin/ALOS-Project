"use client"; // Ensure client-side rendering

import Link from "next/link"; // Import Link from Next.js
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons
import Logo from "./logo";
import { useRouter } from "next/navigation";

const NavigationMenu = () => {
  const router = useRouter(); // Get the current route using useRouter hook

  // Helper function to check if the link is the current route
  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <div className="fixed top-[60px] right-0 bg-white shadow-lg w-[300px] h-[90%] min-h-screen z-10">
      {/* Logo Section (Top) */}
      <div className="flex justify-center items-center py-8">
        <Logo />
      </div>

      {/* Navigation Menu (Column layout for navigation links) */}
      <div className="flex flex-col justify-center px-4 py-4 space-y-4">
        <Link
          href="#home"
          className={`text-lg font-semibold transition duration-300 ${isActive("#home") ? "hover:text-orange-500" : "hover:text-blue-500"}`}
        >
          Home
        </Link>
        <Link
          href="#about"
          className={`text-lg font-semibold transition duration-300 ${isActive("#about") ? "text-orange-500" : "hover:text-blue-500"}`}
        >
          About Us
        </Link>
        <Link
          href="#partners"
          className={`text-lg font-semibold transition duration-300 ${isActive("#partners") ? "text-orange-500" : "hover:text-blue-500"}`}
        >
          Partners
        </Link>
        <Link
          href="#broadband-plans"
          className={`text-lg font-semibold transition duration-300 ${isActive("#broadband-plans") ? "text-orange-500" : "hover:text-blue-500"}`}
        >
          Broadband Plans
        </Link>
        <Link
          href="#excitel-fiber"
          className={`text-lg font-semibold transition duration-300 ${isActive("#excitel-fiber") ? "text-orange-500" : "hover:text-blue-500"}`}
        >
          Excitel Fiber
        </Link>
        <Link
          href="#excitel-near-me"
          className={`text-lg font-semibold transition duration-300 ${isActive("#excitel-near-me") ? "text-orange-500" : "hover:text-blue-500"}`}
        >
          Excitel Near Me
        </Link>
        <Link
          href="#blogs"
          className={`text-lg font-semibold transition duration-300 ${isActive("#blogs") ? "text-orange-500" : "hover:text-blue-500"}`}
        >
          Blogs
        </Link>
        <Link
          href="#contact"
          className={`text-lg font-semibold transition duration-300 ${isActive("#contact") ? "text-orange-500" : "hover:text-blue-500"}`}
        >
          Contact Us
        </Link>
        <Link
          href="#sitemap"
          className={`text-lg font-semibold transition duration-300 ${isActive("#sitemap") ? "text-orange-500" : "hover:text-blue-500"}`}
        >
          Sitemap
        </Link>
      </div>

      {/* Social Media Icons Section (Row layout for social icons) */}
      <div className="flex justify-center space-x-8 py-4">
        <Link
          href="https://www.facebook.com"
          target="_blank"
          className="text-xl hover:text-blue-600 transition duration-300"
        >
          <FaFacebook />
        </Link>
        <Link
          href="https://www.twitter.com"
          target="_blank"
          className="text-xl hover:text-blue-400 transition duration-300"
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://www.instagram.com"
          target="_blank"
          className="text-xl hover:text-pink-500 transition duration-300"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://www.linkedin.com"
          target="_blank"
          className="text-xl hover:text-blue-700 transition duration-300"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default NavigationMenu;
