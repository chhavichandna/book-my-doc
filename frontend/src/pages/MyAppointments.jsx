// import React, { useContext } from 'react'
// import { AppContext } from '../context/AppContext'
// import { assets } from '../assets/assets'

// const MyAppointments = () => {


//   const {doctors} = useContext(AppContext)


//   return (
//     <div>
//         <p className='pb-3 mt-12 font-bold text-zinc-700 border-b border-gray-300'>My Appointments</p>
//         <div>
//          {doctors.slice(0,3).map((item,index)=> (
//           <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b border-gray-300' key={index}>
//             <div>
//               <img className='w-32 bg-indigo-50' src={item.image} alt="" />
//             </div>
//             <div className='flex-1 text-sm text-zinc-600'>
//               <p className='text-neutral-800 font-semibold'>{item.name}</p>
//               <p>{item.speciality}</p>
//               <p className='text-zinc-700 font-medium mt-1'>Address:</p>
//               <p className='text-xs'>{item.address.line1}</p>
//               <p className='text-xs'>{item.address.line2}</p>
//               <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span>19, June, 2025 | 2:39 PM</p>
//             </div>
//             <div>  </div>  
//             <div className='flex flex-col gap-2 justify-end'>
//               <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border  rounded hover:bg-blue-600 hover:text-white transition-all duration-300'>Pay Online</button>
//               <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border  rounded hover:bg-primary hover:text-white transition-all duration-300'>Cancel Appointment</button>
//             </div>
//           </div>
//          ))}
//         </div>
//     </div>
//   )
// }

// export default MyAppointments


import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div className='max-w-4xl mx-auto px-4 sm:px-8 md:px-12 py-10 text-sm'>
      <h2 className='text-2xl font-semibold text-neutral-800 pb-3 border-b border-gray-300 mb-6'>
        My Appointments
      </h2>

      {doctors.slice(0, 3).map((item, index) => (
        <div
          key={index}
          className='flex flex-col sm:flex-row gap-6 border-b border-gray-200 py-6'
        >
          {/* Doctor Image */}
          <div className='flex-shrink-0'>
            <img
              className='w-32 h-32 object-cover rounded bg-indigo-50'
              src={item.image}
              alt={item.name}
            />
          </div>

          {/* Doctor Info */}
          <div className='flex-1 text-gray-700'>
            <p className='text-lg font-semibold text-neutral-900'>{item.name}</p>
            <p className='text-sm text-primary'>{item.speciality}</p>

            <div className='mt-3 space-y-1'>
              <p className='font-medium text-gray-800'>Address:</p>
              <p className='text-sm'>{item.address.line1}</p>
              <p className='text-sm'>{item.address.line2}</p>
            </div>

            <p className='text-sm text-gray-600 mt-2'>
              <span className='font-medium text-neutral-700'>Date & Time:</span>{' '}
              19 June 2025 | 2:39 PM
            </p>
          </div>

          {/* Buttons */}
          <div className='flex flex-col justify-center gap-2 mt-4 sm:mt-0'>
            <button className='px-6 py-2 rounded border text-sm text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200'>
              Pay Online
            </button>
            <button className='px-6 py-2 rounded border text-sm text-gray-600 hover:bg-primary hover:text-white transition-all duration-200'>
              Cancel Appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MyAppointments