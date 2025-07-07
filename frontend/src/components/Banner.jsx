// import React from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'

// const Banner = () => {

// const navigate = useNavigate()

//   return (
//     <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
//         {/* -------------------left side---------------------------------- */}
//          <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
//             <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
//                 <p>Book Appointment</p>
//                 <p className='mt-4'>With 100+ Trusted Doctors</p>
//             </div>
//             <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create Account</button>
//          </div>
//        {/* ------------------- right side-------------------------------- */}
//        <div className='hidden md:block md:w-1/2 lg:w-[-370px] relative'>
//         <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
//        </div>
//     </div>
//   )
// }

// export default Banner


// import React from 'react';
// import { assets } from '../assets/assets';
// import { useNavigate } from 'react-router-dom';

// const Banner = () => {
//   const navigate = useNavigate();

//   return (
//     <div
//       className="relative rounded-lg overflow-hidden my-20 md:mx-10 w-full min-h-[60vh] flex items-center justify-center"
//       style={{
//         backgroundImage: `url(${assets.appointment_img})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/40 z-0"></div>

//       {/* Content */}
//       <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24 py-16 flex flex-col md:flex-row items-center justify-between">
//         {/* Left Side */}
//         <div className="flex-1 text-white">
//           <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
//             <p>Book Appointment</p>
//             <p className="mt-4">With 100+ Trusted Doctors</p>
//           </div>
//           <button
//             onClick={() => {
//               navigate('/login');
//               scrollTo(0, 0);
//             }}
//             className="bg-white text-gray-700 text-sm sm:text-base px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all duration-300 shadow"
//           >
//             Create Account
//           </button>
//         </div>

       
//       </div>
//     </div>
//   );
// };

// export default Banner;



// import React from 'react';
// import { assets } from '../assets/assets';
// import { useNavigate } from 'react-router-dom';

// const Banner = () => {
//   const navigate = useNavigate();

//   return (
//     <div
//       className="relative rounded-lg overflow-hidden my-20 mx-4 sm:mx-10 w-auto min-h-[60vh] flex items-center justify-center"
//       style={{
//         backgroundImage: `url(${assets.appointment_img})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/30 z-0"></div>

//       {/* Content */}
//       <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24 py-16 flex flex-col md:flex-row items-center justify-between">
//         {/* Left Side */}
//         <div className="flex-1 text-gray-100">
//           <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
//             <p>Book Appointment</p>
//             <p className="mt-4">With 100+ Trusted Doctors</p>
//           </div>
//           <button
//             onClick={() => {
//               navigate('/login');
//               scrollTo(0, 0);
//             }}
//             className="bg-white text-gray-700 text-sm sm:text-base px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all duration-300 shadow"
//           >
//             Create Account
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;



import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative rounded-lg overflow-hidden my-20 mx-4 sm:mx-10 w-auto min-h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${assets.appointment_img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="flex-1 text-white">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            <p className="text-[#ffffff]">Book Appointment</p>
            <p className="mt-4 text-sky-200">With 100+ Trusted Doctors</p>
          </div>
          <button
            onClick={() => {
              navigate('/login');
              scrollTo(0, 0);
            }}
            className="bg-white text-gray-700 text-sm sm:text-base px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all duration-300 shadow"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;