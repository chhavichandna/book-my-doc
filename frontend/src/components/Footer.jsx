// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='md:mx-10'>
//         <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
//            {/* ---------- left section---------- */}
//            <div>
//                  <img className='mb-5 w-40' src={assets.logo} alt="" />
//                  <p className='w-full md:w-2/3 text-gray-600 leading-6'><b>BookMyDoc</b> helps you connect with trusted doctors and book appointments instantly. Fast, easy, and reliable—your health, just a click away. </p>
//            </div>
//            {/* ---------- center section----------- */}
//            <div>
//              <p className='text-xl font-medium mb-5'>COMPANY</p>
//              <ul className='flex flex-col gap-2 text-gray-600'>
//                 <li>Home</li>
//                 <li>About us</li>
//                 <li>Contact us</li>
//                 <li>Privacy policy</li>
//              </ul>
//            </div>
//            {/* ---------- right section--------- */}
//            <div>
//                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
//                <ul className='flex flex-col gap-2 text-gray-600'>
//                 <li>+91-7546239123</li>
//                 <li>Bookmydoc@gmail.com</li>
//                </ul>
//            </div>
//         </div>
//         {/*------------------------------- copyright text--------- */}

//         <div>
//             <hr></hr>
//             <p className='py-5 text-sm text-center'>Copyright 2025@ BookmyDoc - All Right Reserved. </p>
//         </div>


//     </div>
//   )
// }

// export default Footer


import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-gray-50 text-gray-700 pt-16 md:pt-20 px-6 sm:px-10 md:px-20">
      {/* Grid Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-200">
        {/* Left Section */}
        <div className="col-span-2">
          <img className="mb-4 w-40" src={assets.logo} alt="BookMyDoc Logo" />
          <p className="text-sm leading-relaxed text-gray-600 md:max-w-sm">
            <span className="font-semibold text-gray-800">BookMyDoc</span> helps you connect with trusted doctors and book appointments instantly. Fast, easy, and reliable—your health, just a click away.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Company</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {['Home', 'About us', 'Contact us', 'Privacy policy'].map((item, idx) => (
              <li
                key={idx}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Get in Touch</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="hover:text-primary transition-colors cursor-pointer">
              +91-7546239123
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              Bookmydoc@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 text-center text-xs text-gray-500">
        © 2025 BookMyDoc — All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;