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
  ];

  return (
    <div className="mt-20 flex flex-col items-center">
      {/* Section Title */}
      <div className="flex justify-center">
        <h2 className="text-2xl text-gray-400 font-medium">Our Team</h2>
      </div>

      {/* Team Members */}
      <div className="w-full mt-14 mb-20 px-6 md:px-20">
        <div className="flex flex-wrap justify-center lg:justify-between gap-4 lg:gap-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative w-full  lg:w-1/4 h-80 group overflow-hidden flex-shrink-0"
            >
              <Image
                src={member.imgSrc}
                alt={member.name}
                width={300} // Ensures explicit width
                height={320} // Ensures explicit height
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />

              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end text-white p-2">
                <div className="flex justify-between items-center">
                  {/* Name & Department */}
                  <div>
                    <h2 className="text-lg font-semibold">{member.name}</h2>
                    <p className="text-sm text-gray-400">{member.department}</p>
                  </div>

                  {/* IG Section */}
                  <div className="border-2 border-dashed px-2 py-1 border-gray-400 hover:border-white">
                    <p className="text-gray-400">IG</p>
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
