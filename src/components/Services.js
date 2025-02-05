"use client";
import { Camera, Film, Frame, Image, Video } from "lucide-react";
import React from "react";

export default function Services() {
  return (
    <div className=" flex flex-col ml-10 lg:ml-24 h-screen mt-10">
      <div className=" flex flex-col">
        <h1 className="font-semibold text-lg lg:text-3xl">
          IF YOU WANT TO WORK WITH ME
        </h1>
        <p className="font-thin text-gray-400 lg:mt-2">
          My team and i specialize in following services
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-14 mt-16">
        <div className="flex flex-col gap-14 ">
          <div className="flex gap-6 ">
            <div className="flex justify-center items-center border-2 border-dashed p-4 w-12 max-h-12  text-gray-300 border-gray-400">
              <Camera className="transform scale-150" />
            </div>
            <div className="flex flex-col ml-6">
              <div className="text-lg font-semibold">PHOTOSHOOT</div>
              <div className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consecteturus <br />
                adipisc elit, sed do eiusmod tempor.
              </div>
            </div>
          </div>
          <div className="flex gap-6 ">
            <div className="flex justify-center items-center border-2 border-dashed p-4 w-12 max-h-12  text-gray-300 border-gray-400">
              <Video className="transform scale-150" />
            </div>
            <div className="flex flex-col ml-6">
              <div className="text-lg font-semibold">VIDEO SHOOT</div>
              <div className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consecteturus <br />
                adipisc elit, sed do eiusmod tempor.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-14">
          <div className="flex gap-6 ">
            <div className="flex justify-center items-center border-2 border-dashed p-4 w-12 max-h-12  text-gray-300 border-gray-400">
              <Film className="transform scale-150" />
            </div>
            <div className="flex flex-col ml-6">
              <div className="text-lg font-semibold">VIDEO EDITING</div>
              <div className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consecteturus <br />
                adipisc elit, sed do eiusmod tempor.
              </div>
            </div>
          </div>
          <div className="flex gap-6 ">
            <div className="flex justify-center items-center border-2 border-dashed p-4 w-12 max-h-12  text-gray-300 border-gray-400">
              <Frame className="transform scale-150" />
            </div>
            <div className="flex flex-col ml-6">
              <div className="text-lg font-semibold">CANVAS PRINT</div>
              <div className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consecteturus <br />
                adipisc elit, sed do eiusmod tempor.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-14">
          <div className="flex gap-6">
            <div className="flex justify-center items-center border-2 border-dashed p-4 w-12 max-h-12  text-gray-300 border-gray-400">
              <Image className="transform scale-150" />
            </div>
            <div className="flex flex-col ml-6">
              <div className="text-lg font-semibold">RETOUCHING</div>
              <div className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consecteturus <br />
                adipisc elit, sed do eiusmod tempor.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
