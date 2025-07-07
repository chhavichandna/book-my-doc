// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'


// const Login = () => {

// const {backendUrl, token, setToken} = useContext(AppContext)
// const navigate = useNavigate()

// const[state,setState] = useState('Sign Up')

// const [email,setEmail] = useState('')
// const [password,setPassword] = useState('')
// const [name,setName] = useState('')

// const onSubmitHandler = async (event) => {
// event.preventDefault()

// try {
//   if (state === 'Sign Up'){
//     const {data} = await axios.post(backendUrl + '/api/user/register', {name,password,email})
//     if (data.success) {
//       localStorage.setItem('token',data.token)
//       setToken(data.token)
//     } else {
//       toast.error(data.message)
//     }
//   } else {
//       const {data} = await axios.post(backendUrl + '/api/user/login', {password,email})
//     if (data.success) {
//       localStorage.setItem('token',data.token)
//       setToken(data.token)
//     } else {
//       toast.error(data.message)
//     }
//   }

// } catch (error) {
//   toast.error(error.message)
// }
// }

// useEffect (()=> {
// if (token) {
// navigate('/')
// }
// },[token])

//   return (
//   <form onSubmit={onSubmitHandler} className='min-h-[-800vh] flex items-center'>
//    <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg' >
//     <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
//     <p>Please {state === 'Sign Up' ? "sign up" : "log in"} to book an appointment</p>
//     {
//       state === "Sign Up" &&   <div className='w-full'>
//       <p>Full Name</p>
//       <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=> setName(e.target.value)} value={name} required/>
//     </div>
//     }
//      <div className='w-full'>
//       <p>Email</p>
//       <input  className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=> setEmail(e.target.value)} value={email} required />
//     </div>
//      <div className='w-full'>
//       <p>Password</p>
//       <input  className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=> setPassword(e.target.value)} value={password} required/>
//     </div>
//     <button type='submit' className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
//     {
//       state === "Sign Up"
//       ? <p>Already have an account? <span onClick={()=> setState('Login')}  className='text-primary underline cursor-pointer'>Login here</span></p>
//       : <p>Create a new account? <span onClick={()=> setState('Sign Up')} className='text-primary underline cursor-pointer'>Click here</span></p>
//     }
//    </div>
//   </form>
//   )
// }

// export default Login

import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { backendUrl, token, setToken } = useContext(AppContext)
  const navigate = useNavigate()

  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + '/api/user/register', {
          name,
          password,
          email,
        })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/login', {
          password,
          email,
        })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form
      onSubmit={onSubmitHandler}
      className='min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12'
    >
      <div className='flex flex-col gap-5 w-full max-w-md p-8 bg-white border rounded-xl shadow-xl text-zinc-600 text-sm'>
        <div>
          <h2 className='text-2xl font-bold text-gray-800'>
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </h2>
          <p className='text-sm text-gray-500 mt-1'>
            Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment
          </p>
        </div>

        {state === 'Sign Up' && (
          <div className='w-full'>
            <label className='block mb-1 font-medium'>Full Name</label>
            <input
              className='border border-gray-300 rounded w-full p-2'
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className='w-full'>
          <label className='block mb-1 font-medium'>Email</label>
          <input
            className='border border-gray-300 rounded w-full p-2'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className='w-full'>
          <label className='block mb-1 font-medium'>Password</label>
          <input
            className='border border-gray-300 rounded w-full p-2'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button
          type='submit'
          className='bg-primary text-white w-full py-2 rounded-md text-base hover:bg-opacity-90 transition-all mt-2'
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <div className='text-sm text-center'>
          {state === 'Sign Up' ? (
            <p>
              Already have an account?{' '}
              <span
                onClick={() => setState('Login')}
                className='text-primary underline cursor-pointer'
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Create a new account?{' '}
              <span
                onClick={() => setState('Sign Up')}
                className='text-primary underline cursor-pointer'
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </div>
    </form>
  )
}

export default Login