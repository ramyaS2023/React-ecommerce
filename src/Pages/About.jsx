import React from 'react'
import aboutImage from '../assets/Images/aboutyyyyy.png' 

const About = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 bg-gray-50">
      {/* Left Side Image */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <img
          src={aboutImage}
          alt="About Us"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>

      {/* Right Side Text */}
      <div className="md:w-1/2 md:pl-12 text-gray-800">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
          About <span className="text-blue-600">E-Shop</span>
        </h2>
        <p className="text-lg leading-relaxed mb-4 font-light">
          Welcome to <strong className="font-semibold">E-Shop</strong>, your number one
          destination for quality products, seamless shopping, and unbeatable deals.
          We are dedicated to giving you the very best, with a focus on reliability,
          customer service, and uniqueness.
        </p>
        <p className="text-lg leading-relaxed font-light">
          Founded in 2024, E-Shop has come a long way from its beginnings. When we first
          started out, our passion was to make online shopping fast, secure, and joyful —
          and that’s what drove us to turn our hard work into a booming online store.
        </p>
        <p className="text-lg leading-relaxed mt-4 font-light">
          We hope you enjoy our products as much as we enjoy offering them to you.  
          If you have any questions or comments, please don't hesitate to contact us.
        </p>
      </div>
    </div>
  )
}

export default About
