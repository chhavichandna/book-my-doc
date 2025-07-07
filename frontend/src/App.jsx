// import React from 'react'
// import { Route , Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Doctors from './pages/Doctors'
// import Login from './pages/Login'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import MyProfile from './pages/MyProfile'
// import MyAppointments from './pages/MyAppointments'
// import Appointment from './pages/Appointment'
// import Navbar from './components/navbar'
// import Footer from './components/Footer'
//  import { ToastContainer, toast } from 'react-toastify';
//  import 'react-toastify/dist/ReactToastify.css'

// const App = () => {
//   return (
    
//     <div className='mx-4 sm:mx-[10%]'>
//       <ToastContainer/>
//   <Navbar/>
// <Routes>
//   <Route path='/' element={<Home /> } />
//   <Route path='/doctors' element={<Doctors /> } />
//   <Route path='/doctors/:speciality' element={<Doctors /> } />
//   <Route path='/login' element={<Login /> } />
//   <Route path='/about' element={<About /> } />
//  <Route path='/contact' element={<Contact /> } />
//   <Route path='/my-profile' element={<MyProfile /> } />
//     <Route path='/my-appointments' element={<MyAppointments /> } />
// <Route path='/appointment/:docId' element={<Appointment /> } />
// </Routes>
// <Footer/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Doctors from './pages/Doctors'
// import Login from './pages/Login'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import MyProfile from './pages/MyProfile'
// import MyAppointments from './pages/MyAppointments'
// import Appointment from './pages/Appointment'
// import Navbar from './components/navbar'
// import Footer from './components/Footer'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// const App = () => {
//   return (
//     <>
//       {/* Toast and Navbar */}
//       <ToastContainer />
//       <Navbar />

//       {/* All Routes (now full width) */}
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/doctors' element={<Doctors />} />
//         <Route path='/doctors/:speciality' element={<Doctors />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/my-profile' element={<MyProfile />} />
//         <Route path='/my-appointments' element={<MyAppointments />} />
//         <Route path='/appointment/:docId' element={<Appointment />} />
//       </Routes>

//       {/* Footer (also full width now) */}
//       <Footer />
//     </>
//   )
// }

// export default App



import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
// import Navbar from './components/navbar'
// import Navbar from './components/navbar'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'

const App = () => {
  const location = useLocation()
  const hideFooterRoutes = ['/login']  // Add more routes to hide footer if needed

  return (
    <>
      {/* Toast and Navbar */}
      <ToastContainer />
      <Navbar />

      {/* All Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
      </Routes>

      {/* Conditionally render Footer */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  )
}

export default App