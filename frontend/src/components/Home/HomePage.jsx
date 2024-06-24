import React from "react";
import { FaChartPie, FaList, FaMoneyBillWave, FaQuoteLeft, FaSignInAlt } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { IoIosStats } from "react-icons/io";
import { Link } from "react-router-dom";
import homepic from "../../assets/home.png";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 px-4">
        <div className="flex-shrink-0">
          <img src={homepic} alt="homepic" className="h-[500px] w-[560px]" />
        </div>
        <div className="flex flex-col justify-center ml-6">
          {/* Heading */}
          <h1 className="text-5xl font-bold">
            Track Your RFQ
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-xl">
            Manage your finances with a modern solution designed for you.
          </p>

          {/* Feature Icons */}
          <div className="flex space-x-8 mt-10">
            <div className="flex flex-col items-center">
              <FaMoneyBillWave className="text-3xl" />
              <p className="mt-2">Efficient Tracking</p>
            </div>
            <div className="flex flex-col items-center">
              <FaFilter className="text-3xl" />
              <p className="mt-2">Easy to Use</p>
            </div>
            <div className="flex flex-col items-center">
              <IoIosStats className="text-3xl" />
              <p className="mt-2">Insightful Reports</p>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="flex space-x-4 mt-8">
            <Link to="/register">
              <button className="px-6 py-3 bg-red-100 text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                Get Started
              </button>
            </Link>
            <Link to="/login">
              <button className="px-6 py-3 bg-green-200 text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* How it works */}
      <div className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          How It Works
        </h2>
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-blue-500 text-white mb-4">
              <FaSignInAlt className="text-xl" />
            </div>
            <h3 className="mb-2 font-semibold">Sign Up</h3>
            <p>Register and start </p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-green-500 text-white mb-4">
              <FaList className="text-xl" />
            </div>
            <h3 className="mb-2 font-semibold">TEXT</h3>
            <p>QTEXT.....</p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-yellow-500 text-white mb-4">
              <FaChartPie className="text-xl" />
            </div>
            <h3 className="mb-2 font-semibold">TEXT</h3>
            <p>TEXT</p>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="bg-gray-100 py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          What Our Users Say
        </h2>
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-xl text-gray-400" />
            <p className="mt-4">
              "............................................................................................"
            </p>
            <p className="mt-4 font-bold">- Jane Doe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-xl text-gray-400" />
            <p className="mt-4">
              "......................................................................................"
            </p>
            <p className="mt-4 font-bold">- John Smith</p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="bg-blue-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">
            text.............
          </h2>
          <p className="mt-4">
            text....................
          </p>
          <Link to="/register">
            <button className="mt-8 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
              Sign Up For Free
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
