// import React from 'react'
// import { assets } from '../assets/assets'

// const About = () => {
//   return (
//     <div>
        
//         <div className='text-center text-2xl pt-10 text-gray-500'>
//            <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
//         </div>
//         <div className='my-10 flex flex-col md:flex-row gap-12'>
//           <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
//           <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
//             <p>Welcome to BookmyDoc, your trusted partner in managing your healthcare needs conveniently and efficiently. At BookmyDoc, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
//             <p>BookmyDoc is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, BookmyDoc is here to support you every step of the way.</p>
//             <b className='text-gray-800'>Our Vision</b>
//             <p>Our vision at BookmyDoc is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
//           </div>
//         </div>
//         <div className='text-xl my-4'>
//           <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
//         </div>
//         <div className='flex flex-col md:flex-row mb-20'>
//           <div className='border px-10 md:px-16 py-8 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//             <b>EFFICIENCY:</b>
//             <p>Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.</p>
//           </div>
//           <div className='border px-10 md:px-16 py-8 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//              <b>CONVENIENCE:</b>
//             <p>Access To A Network Of Trusted Healthcare Proffessionals In Your Area.</p>
//           </div>
//           <div className='border px-10 md:px-16 py-8 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//              <b>PERSONALIZATION:</b>
//             <p>Tailored Recommendations And Reminders To Help You Stay On Top Of Your Health.</p>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default About





import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20"> {/* <== Added width here */}
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        {/* <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
         */}
         <img className='w-full md:max-w-[360px] md:ml-29' src={assets.about_image} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to BookmyDoc, your trusted partner in managing your healthcare needs conveniently and efficiently. At BookmyDoc, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>BookmyDoc is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, BookmyDoc is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at BookmyDoc is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5 text-sm hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5 text-sm hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>Access To A Network Of Trusted Healthcare Professionals In Your Area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5 text-sm hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>Tailored Recommendations And Reminders To Help You Stay On Top Of Your Health.</p>
        </div>
      </div>
    </div>
  )
}

export default About