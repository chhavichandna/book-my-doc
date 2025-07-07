// import React from 'react'
// import { specialityData } from '../assets/assets'
// import { Link } from 'react-router-dom'

// const SpecialityMenu = () => {
//   return (
//     <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
//     <h1 className='text-3xl font-medium'>Find by Speciality</h1>
//     <p className='sm:w-1/3 text-center text-sm '>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free. </p> 
//     <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
//           {specialityData.map((item,index)=>(
//             <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
//                 <img className='w-16 sm:w-24  mt-4' src={item.image} alt="" />
//                 <p>{item.speciality}</p>
//             </Link>
//           ))}
//     </div>
//     </div>
//   )
// }

// export default SpecialityMenu

import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div className="w-full py-16 bg-white text-gray-800" id="speciality">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">Find by Speciality</h1>
        <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
          Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
        </p>
      </div>

      {/* Horizontal scrollable icons (mobile) / wrapped (desktop) */}
      <div className="flex gap-6 overflow-x-auto sm:justify-center sm:gap-10 sm:flex-wrap px-4 scrollbar-hide">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center gap-2 cursor-pointer hover:-translate-y-1 transition-transform duration-300 flex-shrink-0"
          >
            <img
              src={item.image}
              alt={item.speciality}
              className="w-16 sm:w-24 hover:scale-105 transition-transform duration-300"
            />
            <p className="text-sm font-medium text-gray-700">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;


// import React from 'react';
// import { specialityData } from '../assets/assets';
// import { Link } from 'react-router-dom';

// const SpecialityMenu = () => {
//   return (
//     <div
//       className="w-full py-16 bg-gray-50 text-gray-800 px-4 sm:px-10 lg:px-20"
//       id="speciality"
//     >
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-4xl font-semibold mb-2">Find by Speciality</h1>
//         <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
//           Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
//         </p>
//       </div>

//       {/* Grid Scroll Section */}
//       <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 overflow-x-auto sm:overflow-visible">
//         {specialityData.map((item, index) => (
//           <Link
//             key={index}
//             to={`/doctors/${item.speciality}`}
//             onClick={() => scrollTo(0, 0)}
//             className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
//           >
//             <img src={item.image} alt={item.speciality} className="w-14 sm:w-20 object-contain" />
//             <p className="text-xs sm:text-sm text-center font-medium text-gray-700">
//               {item.speciality}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SpecialityMenu;
