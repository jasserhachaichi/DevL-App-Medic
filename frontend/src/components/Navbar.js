import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section>
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col p-5 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <a
              href="/"
              className="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out lg:pr-8"
            >
              Medic Ai
            </a>
            {/* Mobile Menu Button */}
            <button
              className="rounded-lg focus:outline-none md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-8 h-8"
              >
                <path
                  d={isMenuOpen
                    ? "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    : "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"}
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav
            className={`${isMenuOpen ? "flex" : "hidden"
              } grow flex-col items-center border-blue-600 pb-4 md:flex md:flex-row md:justify-end md:pb-0 lg:border-l-2 lg:pl-2`}
          >
            <a
              className="mt-2 px-4 py-2 text-sm text-gray-500 hover:text-blue-600 focus:outline-none md:mt-0"
              href="/about"
            >
              About
            </a>
            <a
              className="mt-2 px-4 py-2 text-sm text-gray-500 hover:text-blue-600 focus:outline-none md:mt-0"
              href="/contactus"
            >
              Contact
            </a>

            <a
            className="mt-2 px-4 py-2 text-sm text-gray-500 hover:text-blue-600 focus:outline-none md:mt-0"
            href="/principale"
          >
            Main page
          </a>


            {/* Sign In / Sign Up Buttons */}
            <div className="inline-flex list-none items-center gap-2 lg:ml-auto">
              <Link to="/login">
                <button className="flex items-center rounded-xl border border-gray-600 px-4 py-2 text-gray-600 hover:bg-gray-100 focus:ring-2 focus:ring-gray-500">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="flex items-center rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
                  Sign up
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </section>




  );
};

export default Navbar;
