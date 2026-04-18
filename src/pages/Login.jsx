import React from 'react'
import spotifyLogo from './Spotify.png'
import { useNavigate,Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {

const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleLogin = (e) => {
    e.preventDefault()

     if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    const storedUser = JSON.parse(localStorage.getItem('spotifyUser'))

    if (!storedUser) {
      setError('No account found. Please sign up first')
      return
    }

    if (storedUser.email !== formData.email || storedUser.password !== formData.password) {
      setError('Invalid email or password')
      return
    }

      localStorage.setItem('spotifyLoggedIn', JSON.stringify(true))
    localStorage.setItem('spotifyCurrentUser', JSON.stringify(storedUser))

    navigate('/home')
  }

return (

    <div className='bg-black flex justify-center items-center h-screen'>
      <div className="relative flex flex-col items-center justify-center bg-gray-800 rounded-2xl h-180 w-100 gap-7 ">
        
        <img 
          src={spotifyLogo} 
          alt="Spotify"
          className="rounded-full w-16 h-16 object-contain hover:rotate-12 hover:scale-110 transition-all duration-300 cursor-pointer" 
        />

        <h1 className="text-white text-4xl font-bold tracking-tight hover:tracking-widest transition-all duration-500 cursor-default">
          Welcome Back
        </h1>

        <button className='relative w-70 h-10 text-white cursor-pointer border rounded-2xl border-gray-400 overflow-hidden
          before:absolute before:inset-0 before:bg-white before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-300
          hover:text-black hover:border-white hover:scale-110 transition-all duration-300 font-semibold'>
          <span className="relative z-10 flex items-center justify-center gap-2">
            <i className="fa-brands fa-apple"></i>
            Continue with Apple
          </span>
        </button>

      
        <button className='relative w-70 h-10 text-white cursor-pointer border rounded-2xl border-gray-400 overflow-hidden
          before:absolute before:inset-0 before:bg-white before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-300
          hover:text-black hover:border-white hover:scale-110 transition-all duration-300 font-semibold'>
          <span className="relative z-10 flex items-center justify-center gap-2">
            <i className="fa-brands fa-google"></i>
            Continue with Google
          </span>
        </button>

     
        <button className='relative w-70 h-10 text-white cursor-pointer border rounded-2xl border-gray-400 overflow-hidden
          before:absolute before:inset-0 before:bg-white before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-300
          hover:text-black hover:border-white hover:scale-110 transition-all duration-300 font-semibold'>
          <span className="relative z-10 flex items-center justify-center gap-2">
            <i className="fa-brands fa-facebook"></i>
            Continue with Facebook
          </span>
        </button>

        <div className="flex items-center w-80 gap-3">
          <div className="flex-1 h-px bg-gray-600" />
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-600" />
        </div>

  <input 
  type='email'
  name='email'
  placeholder='Email or Username'
  value={formData.email}
  onChange={handleChange}
  className='w-70 h-10 text-white cursor-pointer border rounded-2xl border-gray-400 text-center bg-transparent 
  focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/40 focus:shadow-[0_0_15px_rgba(34,197,94,0.3)]
  focus:scale-105 hover:border-gray-300 transition-all duration-300 placeholder-gray-500'
/>


 <input 
  type='password'
  name='password'
  placeholder='Password'
  value={formData.password}
  onChange={handleChange}
  className='w-70 h-10 text-white cursor-pointer border rounded-2xl border-gray-400 text-center bg-transparent 
  focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/40 focus:shadow-[0_0_15px_rgba(34,197,94,0.3)]
  focus:scale-105 hover:border-gray-300 transition-all duration-300 placeholder-gray-500'
/>


{error && (
  <p className="text-red-400 text-sm text-center -mt-4">
    {error}
  </p>
)}

        <a href="#" className='text-gray-400 text-sm cursor-pointer text-center 
          relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-green-400 
          hover:after:w-full after:transition-all after:duration-300 hover:text-green-400 transition-colors duration-300'>
          Forgot your password?
        </a>

        <button   onClick={handleLogin}  className='w-70 h-10 text-black font-bold bg-green-500 cursor-pointer border rounded-2xl border-green-400 hover:scale-110 transition-all duration-300'>
          Log in
        </button>

        <div className="flex flex-row items-center justify-center gap-1">
          <a href="#" className='text-gray-400 text-sm cursor-pointer'>
            Don't have an account?
          </a>


       <Link
  to="/register"
  className='text-green-400 text-sm cursor-pointer font-semibold
  relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-green-400
  hover:after:w-full after:transition-all after:duration-300 hover:text-green-300 transition-colors duration-300'
> Signup for Spotify
</Link>
        </div>

      </div>
    </div>
  )
}

export default Login

