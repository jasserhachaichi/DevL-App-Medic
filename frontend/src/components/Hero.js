import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="relative">
        {/* Background Image */}
        <img
          src="https://www.itnonline.com/sites/default/files/field/image/Screen%20Shot%202019-10-09%20at%209.00.14%20PM.png"
          alt="Hero Background"
          className="w-full h-[75vh] object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Your Hero Section
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            A short and engaging description goes here.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="px-6 py-3 bg-blue-600 rounded-md text-white font-medium hover:bg-blue-700">
              Get Started
            </button>
            <button className="px-6 py-3 bg-gray-800 rounded-md text-white font-medium hover:bg-gray-900">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
