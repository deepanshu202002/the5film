import Image from "next/image";
import React from "react";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "John Doe",
      department: "Software Engineer",
      imgSrc: "https://the5film.s3.eu-north-1.amazonaws.com/Nature_clouds.jpg",
    },
    {
      name: "Jane Smith",
      department: "Product Designer",
      imgSrc: "https://the5film.s3.eu-north-1.amazonaws.com/Nature_clouds.jpg",
    },
    {
      name: "Mike Johnson",
      department: "Data Analyst",
      imgSrc: "https://the5film.s3.eu-north-1.amazonaws.com/Nature_clouds.jpg",
    },
    {
      name: "Emily Davis",
      department: "Marketing Lead",
      imgSrc: "https://the5film.s3.eu-north-1.amazonaws.com/Nature_clouds.jpg",
    },
  ];

  return (
    <div className="mt-20 items-center ">
      <div className="items-center flex justify-center">
        <div className="text-2xl text-gray-400 font-medium">Our Team</div>
      </div>

      {/*   {images.map((imgSrc, index) => (
            <div key={index} className="relative w-1/4 h-full">
              <Image
                src={imgSrc}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ))} */}
      <div className="h-80 w-full mt-14 mb-10 px-14">
        <div className="flex justify-between gap-14 h-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative w-1/4 h-full group overflow-hidden"
            >
              <Image
                src={member.imgSrc}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
              {/* <div className="justify-between flex">
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-baseline justify-end  text-white">
                  <h2 className="text-lg ml-3 mb-2 font-semibold">
                    {member.name}
                  </h2>
                  <p className="text-sm ml-3 mb-2 text-gray-400">
                    {member.department}
                  </p>
                </div>
                <div className="border-2 border-dashed">
                  <p>IG</p>
                </div>
              </div> */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end text-white p-3">
                {/* Container with Name & IG (justify-between) */}
                <div className="flex justify-between w-full items-center">
                  {/* Name & Department (Left Side) */}
                  <div>
                    <h2 className="text-lg font-semibold">{member.name}</h2>
                    <p className="text-sm text-gray-400">{member.department}</p>
                  </div>

                  {/* IG Section (Right Side) */}
                  <div className="border-2 border-dashed px-3 py-1 border-gray-400 hover:border-white">
                    <p className="text-gray-400 ">IG</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
