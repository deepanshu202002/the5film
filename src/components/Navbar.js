"use client";
import { useState, useEffect } from "react";
import { Camera, Menu, X } from "lucide-react"; // Importing icons from Lucide React

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
                  About
                </a>
                <a href="#" className="hover:text-gray-300">
                  Contact
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
        className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-black border-dashed border-gray-500 border-l-2 md:w-1/3 w-2/3 transform transition-transform duration-500 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } `}
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          The5Film
        </h5>
        <button
          type="button"
          onClick={toggleDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white transition duration-500"
        >
          <X className="w-3 h-3" />
          <span className="sr-only">Close menu</span>
        </button>

        <div>
          <p className="text-gray-500 font-semibold my-8">
            Contact Information
          </p>
          <h2 className="text-2xl font-semibold mb-5">
            Feel Free To Connect With Us
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between mr-5">
              <div className="h-36 max-w-52 w-full rounded-2xl border-2  border-dashed flex ">
                <div className="flex gap-4 relative items-center">
                  <div className="absolute h-12 w-14 top-0 -left-0 overflow-hidden rounded-xl border-l-0 border-t-0 border-dashed border-2 items-center justify-center flex">
                    <Camera />
                  </div>
                  <div className="flex flex-col justify-center mt-5 ml-5">
                    <div className="text-sm text-gray-500 text-center">
                      Photographer
                    </div>
                    <div className="text-center ml-5">Amrinder Singh</div>
                  </div>
                </div>
              </div>
              <div>Location-Brampton</div>
            </div>
            <div className="flex justify-between mr-5">
              <div>Email-info@the5film.com</div>
              <div>Instagram-the5film</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
