"use client";
import React from "react";

export default function FiveImages() {
  return (
    // <div className="bg-black ">
    //   <div className="mx-auto my-16  flex max-h-[36rem] w-full max-w-4xl gap-10 ">
    //     <div className="flex w-full flex-col gap-10">
    //       <div className=" h-full w-full overflow-hidden ">
    //         <img
    //           className=" h-full w-full object-cover"
    //           src="https://images.pexels.com/photos/19333424/pexels-photo-19333424/free-photo-of-soup-and-teapot-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //         />
    //       </div>
    //       <div className="h-full w-full overflow-hidden ">
    //         <img
    //           className=" h-full w-full object-cover"
    //           src="https://images.pexels.com/photos/19333424/pexels-photo-19333424/free-photo-of-soup-and-teapot-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //         />
    //       </div>
    //     </div>
    //     <div className="flex w-full flex-col gap-10">
    //       <div className=" h-full w-full overflow-hidden ">
    //         <img
    //           className=" h-full w-full object-cover"
    //           src="https://images.pexels.com/photos/19333424/pexels-photo-19333424/free-photo-of-soup-and-teapot-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //         />
    //       </div>
    //       <div className="h-full w-full overflow-hidden ">
    //         <img
    //           className=" h-full w-full object-cover"
    //           src="https://images.pexels.com/photos/19333424/pexels-photo-19333424/free-photo-of-soup-and-teapot-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //         />
    //       </div>
    //     </div>
    //     <div className=" flex flex-col   w-full">
    //       <div className="h-2/3 w-full  overflow-hidden">
    //         <img
    //           className=" h-full w-full object-cover"
    //           src="https://images.pexels.com/photos/19333424/pexels-photo-19333424/free-photo-of-soup-and-teapot-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //         />
    //       </div>

    //       <div className="h-1/3 flex justify-center items-center ">
    //         <button className=" py-2 w-52 border-2 border-dashed border-gray-500 text-sm text-white text-opacity-80 hover:border-white">
    //           Check Out My Instagram
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-black sticky z-10 ">
      <div className="mx-auto p-10 md:p-0 my-16 flex flex-col md:flex-row max-h-[36rem] w-full max-w-4xl gap-10">
        {/* Left Column */}
        <div className="flex w-full flex-col gap-10">
          <div className="relative h-full w-full overflow-hidden group ">
            <img
              className="h-full w-full object-cover transition-all duration-750 md:duration-300 group-hover:blur-sm"
              src="https://the5film.s3.eu-north-1.amazonaws.com/automobile.JPG"
            />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-30 text-white text-lg p-2 transform translate-y-full transition-all duration-300 group-hover:translate-y-0 group-hover: drop-shadow-lg">
              Automobile
            </div>
          </div>

          <div className="relative h-full w-full overflow-hidden group">
            <img
              className="h-full w-full object-cover transition-all duration-300 group-hover:blur-sm"
              src="https://the5film.s3.eu-north-1.amazonaws.com/couple.jpg"
            />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-50 text-white text-sm p-2 transform translate-y-full transition-all duration-300 group-hover:translate-y-0 ">
              Couple
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex w-full flex-col gap-10">
          <div className="relative h-full w-full overflow-hidden group">
            <img
              className="h-full w-full object-cover transition-all duration-300 group-hover:blur-sm"
              src="https://the5film.s3.eu-north-1.amazonaws.com/Nature_clouds.jpg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-sm p-2 text-center transform translate-y-full transition-all duration-300 group-hover:translate-y-0">
              Nature
            </div>
          </div>

          <div className="relative h-full w-full overflow-hidden group">
            <img
              className="h-full w-full object-cover transition-all duration-300 group-hover:blur-sm"
              src="https://the5film.s3.eu-north-1.amazonaws.com/small_screen_3.JPG"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-sm p-2 text-center transform translate-y-full transition-all duration-300 group-hover:translate-y-0">
              Picture Name
            </div>
          </div>
        </div>

        {/* Single Large Image with Button */}
        <div className="flex flex-col w-full">
          <div className="relative h-2/3 w-full overflow-hidden group">
            <img
              className="h-full w-full object-cover transition-all duration-300 group-hover:blur-sm"
              src="https://the5film.s3.eu-north-1.amazonaws.com/small_screen_2.JPG"
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
