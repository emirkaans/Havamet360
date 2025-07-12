"use client";

import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    institution: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Buraya API call veya başka işlem eklenebilir
  };

  return (
    <section className="mt-20 py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-900">
        Register
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-3">
            <input
              type="text"
              name="firstName"
              placeholder="First"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400 text-gray-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400 text-gray-500"
            />
          </div>
        </div>

        {/* Institution */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Institution or Department
          </label>
          <input
            type="text"
            name="institution"
            placeholder="Institution or Department"
            value={formData.institution}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400 text-gray-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400 text-gray-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400 text-gray-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-lg py-2 font-semibold hover:from-gray-950 hover:to-gray-700 transition duration-300 shadow-md cursor-pointer"
        >
          Register
        </button>
      </form>
    </section>
  );
};

export default Register;
