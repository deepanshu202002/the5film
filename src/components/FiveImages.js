"use client";
import React from "react";

export default function FiveImages() {
  return (
    <div className="bg-black w-full">
      <div className="mx-auto p-10 md:p-0 my-16 flex flex-col md:flex-row w-full max-w-4xl gap-10 mb-10">
        {/* Left Column */}
        <div className="flex w-full flex-col gap-10">
          <div className="relative w-full overflow-hidden group">
            <img
              className="w-full object-cover transition-all duration-750 md:duration-300 group-hover:blur-sm"
              src="https://the5film.s3.eu-north-1.amazonaws.com/automobile.JPG"
              alt="Automobile"
            />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-30 text-white text-lg p-2 transform translate-y-full transition-all duration-300 group-hover:translate-y-0">
              Automobile
            </div>
          </div>

          <div className="relative w-full overflow-hidden group lg:max-h-72">
            <img
              className="w-full object-cover transition-all duration-300 group-hover:blur-sm"
              src="https://the5film.s3.eu-north-1.amazonaws.com/couple.jpg"
              alt="Couple"
            />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-50 text-white text-sm p-2 transform translate-y-full transition-all duration-300 group-hover:translate-y-0">
              Couple
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex w-full flex-col gap-10">
          <div className="relative w-full overflow-hidden group">
            <img
              className="w-full object-cover transition-all duration-300 group-hover:blur-sm"
              src="https://the5film.s3.eu-north-1.amazonaws.com/Nature_clouds.jpg"
              alt="Nature"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-sm p-2 text-center transform translate-y-full transition-all duration-300 group-hover:translate-y-0">
              Nature
            </div>
          </div>

          <div className="relative w-full overflow-hidden group">
            <img
              className="w-full object-cover transition-all duration-300 group-hover:blur-sm"
              src="https://the5film.s3.eu-north-1.amazonaws.com/small_screen_3.JPG"
              alt="Picture Name"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-sm p-2 text-center transform translate-y-full transition-all duration-300 group-hover:translate-y-0">
              Picture Name
            </div>
          </div>
        </div>

        {/* Single Large Image with Button */}
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden group">
            <img
              className="w-full object-cover transition-all duration-300 group-hover:blur-sm"
              src="https://the5film.s3.eu-north-1.amazonaws.com/small_screen_2.JPG"
              alt="Portrait"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-sm p-2 text-center transform translate-y-full transition-all duration-300 group-hover:translate-y-0">
              Portrait
            </div>
          </div>

          <div className="h-1/3 flex justify-center items-center">
            <button className="py-2 w-52 border-2 border-dashed border-gray-500 text-sm text-white text-opacity-80 hover:border-white">
              <a href="https://www.instagram.com/the5film/">
                Check Out My Instagram
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
