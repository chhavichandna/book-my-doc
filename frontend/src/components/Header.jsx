// import React from 'react'
// import { assets } from '../assets/assets'
// const Header = () => {
//   return (
//     <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
//         {/*----------------------------- left side-------------------------- */}
//         <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
//            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
//             Book Appointment  <br></br>with Trusted Doctors
//            </p>
//            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
//             <img className='w-28' src={assets.group_profiles} alt="" />
//             <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block'></br>schedule your appointment hassle-free.</p>
//            </div>
//            <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
//             Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
//            </a>
//         </div>

//         {/* ---------------------------right side-------------------- */}
//         <div className='md:w-1/2 relative'>
//           <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
//         </div>
//     </div>
//   )
// }

// export default Header

// import React from 'react';
// import { assets } from '../assets/assets';

// const Header = () => {
//   return (
//     <div
//       className="relative w-full bg-cover bg-center bg-no-repeat text-white"
//       style={{
//         backgroundImage: `url(${assets.bannerrr})`,
//         minHeight: '80vh',
//       }}
//     >
//       {/* Dark overlay for contrast */}
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

//       {/* Content Layer */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 flex flex-col gap-6 items-start justify-center h-full">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight drop-shadow-lg">
//           Book Appointment <br /> with Trusted Doctors
//         </h1>

//         <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-light drop-shadow">
//           <img className="w-28" src={assets.group_profiles} alt="Profiles" />
//           <p className="text-white max-w-md">
//             Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block" />
//             schedule your appointment hassle-free.
//           </p>
//         </div>

//         <a
//           href="#speciality"
//           className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-700 text-sm font-medium shadow-md hover:scale-105 transition-transform duration-300"
//         >
//           Book appointment
//           <img className="w-3" src={assets.arrow_icon} alt="arrow" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="w-full px-4 sm:px-10 mt-6">
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat text-white rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${assets.bannerrr})`,
          minHeight: '75vh',
        }}
      >
        {/* ✅ Softer Overlay with less opacity */}
        <div className="absolute inset-0 bg-black/25 z-0"></div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-20 py-16 flex flex-col gap-6 items-start justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Book Appointment <br /> with <span className="text-[#131468] font-bold">Trusted Doctors</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-light drop-shadow">
            <img className="w-24 md:w-28" src={assets.group_profiles} alt="Profiles" />
            <p className="text-gray-200 max-w-md md:text-base">
              Browse our trusted doctors and book your appointment hassle-free — wherever, whenever.
            </p>
          </div>

          <a
            href="#speciality"
            className="flex items-center gap-2 bg-white px-6 py-3 rounded-full text-gray-800 text-sm font-medium shadow-md hover:scale-105 transition-transform duration-300"
          >
            Book appointment
            <img className="w-3" src={assets.arrow_icon} alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;