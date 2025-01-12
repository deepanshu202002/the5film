"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Importing icons from Lucide React

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-full mx-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <div className="flex items-center">
              <div className="text-2xl font-bold">The5Film</div>
            </div>
            <div className="hidden md:block mt-auto">
              <div className="ml-10 flex items-baseline space-x-4 font-mono">
                <a href="#" className="hover:text-gray-300  ">
                  Home
                </a>
                <a href="#" className="hover:text-gray-300">
                  Portfolio
                </a>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={toggleDrawer}
              className="text-white   focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5"
            >
              {isDrawerOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Drawer Component */}
      <div
        className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-black border-dashed border-gray-500 border-l-2 w-80 transform transition-transform duration-500 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } `}
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          Right drawer
        </h5>
        <button
          type="button"
          onClick={toggleDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <X className="w-3 h-3" />
          <span className="sr-only">Close menu</span>
        </button>
        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          Supercharge your hiring by taking advantage of our{" "}
          <a
            href="#"
            className="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline"
          >
            limited-time sale
          </a>{" "}
          for Flowbite Docs + Job Board. Unlimited access to over 190K
          top-ranked candidates and the #1 design job board.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Learn more
          </a>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Get access
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
