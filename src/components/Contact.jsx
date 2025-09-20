import React from "react";

const ContactForm = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen  p-4 "
      dir="ltr"
      id="Contact"
    >
      <div className="bg-[#E0E0E0] rounded-xl shadow-lg p-8 w-full md:w-[80%]  text-start">
        <h1 className="mb-8 mt-[5] text-4xl font-bold md:text-start text-center">
          Contact us
        </h1>

        <form>
          {/* Name Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="name"
              className="w-full px-4 py-3 bg-gray-50  border-gray-300 rounded-2xl  text-3xl font-bold text-gray-700 placeholder-[#E0E0E0] focus:outline-none focus:ring-2 border-0 focus:ring-blue-500 transition duration-200"
            />
          </div>

          {/* Phone Input */}
          <div className="mb-4">
            <input
              type="tel"
              placeholder="phone"
              className="w-full px-4 py-3 bg-gray-50  border-gray-300 rounded-2xl  text-3xl font-bold text-gray-700 placeholder-[#E0E0E0] focus:outline-none focus:ring-2 border-0 focus:ring-blue-500 transition duration-200"
            />
          </div>

          {/* Message Textarea */}
          <div className="mb-6">
            <textarea
              placeholder="message"
              rows="5"
              className="w-full px-4 py-3 bg-gray-50  border-gray-300 rounded-2xl  text-3xl font-bold text-gray-700 placeholder-[#E0E0E0] focus:outline-none focus:ring-2 border-0 focus:ring-blue-500 transition duration-200 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg text-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
