"use client";
import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handles input changes and updates the state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-full mb-10 mt-10 bg-black text-white px-8">
      {/* Left Section - Contact Form */}
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <h2 className="font-bold mb-4 ml-10 text-4xl">CONTACT US</h2>

        <form onSubmit={handleSubmit} className="w-full max-w-2xl p-8">
          {/* Name Fields */}
          <div className="flex flex-wrap">
            {["firstName", "lastName"].map((field) => (
              <div
                key={field}
                className="w-1/2 px-3 group focus-within:text-white"
              >
                <label
                  className={`block text-sm mb-1 transition-all ${
                    formData[field]
                      ? "text-white"
                      : "text-gray-400 group-focus-within:text-white"
                  }`}
                >
                  {field === "firstName" ? "First Name" : "Last Name"}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`w-full border-b transition-all bg-transparent focus:outline-none group-focus-within:border-white ${
                    formData[field]
                      ? "text-white border-white"
                      : "text-gray-400 border-gray-500"
                  }`}
                  required
                />
              </div>
            ))}
          </div>

          {/* Contact Fields */}
          <div className="flex flex-wrap mt-4">
            {["email", "phone"].map((field) => (
              <div
                key={field}
                className="w-1/2 px-3 group focus-within:text-white"
              >
                <label
                  className={`block text-sm mb-1 transition-all ${
                    formData[field]
                      ? "text-white"
                      : "text-gray-400 group-focus-within:text-white"
                  }`}
                >
                  {field === "email" ? "Email" : "Phone Number"}
                </label>
                <input
                  type={field === "email" ? "email" : "tel"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`w-full border-b transition-all bg-transparent focus:outline-none group-focus-within:border-white ${
                    formData[field]
                      ? "text-white border-white"
                      : "text-gray-400 border-gray-500"
                  }`}
                  required
                />
              </div>
            ))}
          </div>

          {/* Message Field */}
          <div className="mt-4 px-3 group focus-within:text-white">
            <label
              className={`block text-sm mb-1 transition-all ${
                formData.message
                  ? "text-white"
                  : "text-gray-400 group-focus-within:text-white"
              }`}
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border-b transition-all bg-transparent focus:outline-none h-16 group-focus-within:border-white ${
                formData.message
                  ? "text-white border-white"
                  : "text-gray-400 border-gray-500"
              }`}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6 px-3">
            <button
              type="submit"
              className="border-2 border-dashed border-gray-400 hover:border-white px-6 py-2 text-gray-400 hover:text-white transition duration-300 ease-in-out"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>

      {/* Right Section - Google Map (Hidden on Small Screens) */}
      <div className="hidden md:flex w-full md:w-1/2 items-center justify-center mt-6 md:mt-0">
        <iframe
          className="w-full md:w-80 h-96 "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.9537363153167!3d-37.81627917975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df0f7dfb1%3A0x2d26b58f8c3c792b!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1645160920867!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
