import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import spotifyLogo from './Spotify.png'

const Login = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false) 

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
      <div className="relative flex flex-col items-center justify-center bg-gray-900  rounded-2xl h-180 w-100 gap-7 
        hover:shadow-[0_0_25px_rgba(33,33,190,0.4)] hover:-translate-y-2 transition-all duration-500">
        
        <img 
          src={spotifyLogo} 
          alt="Spotify"
          className="rounded-full w-16 h-16 object-contain hover:rotate-[360deg] hover:scale-110 transition-all duration-700 cursor-pointer" 
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

        {error && (
          <p className="text-red-400 text-sm font-semibold text-center w-70 bg-red-400/10 py-2 rounded-xl border border-red-400/30">
            {error}
          </p>
        )}

        <input 
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email' 
          className='w-70 h-10 text-white cursor-pointer border rounded-2xl border-gray-400 text-center bg-transparent 
          focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/40 focus:shadow-[0_0_15px_rgba(34,197,94,0.3)]
          focus:scale-105 hover:border-gray-300 transition-all duration-300 placeholder-gray-500'
        />

<div className="relative w-70">
  <input 
    type={showPassword ? 'text' : 'password'} 
    name='password'
    value={formData.password}
    onChange={handleChange}
    placeholder='Password' 
    className='w-full h-10 text-white cursor-pointer border rounded-2xl border-gray-400 text-center bg-transparent 
    focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/40 focus:shadow-[0_0_15px_rgba(34,197,94,0.3)]
    focus:scale-105 hover:border-gray-300 transition-all duration-300 placeholder-gray-500'
  />
  <button 
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
  >
   
    <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'} text-sm`}></i>
  </button>
</div>

        <a href="#" className='text-gray-400 text-sm cursor-pointer text-center 
          relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-green-400 
          hover:after:w-full after:transition-all after:duration-300 hover:text-green-400 transition-colors duration-300'>
          Forgot your password?
        </a>

        <button 
          onClick={handleLogin}
          className='w-70 h-10 text-black font-bold bg-green-500 cursor-pointer border rounded-2xl border-green-400 hover:scale-110 transition-all duration-300'>
          Log in
        </button>

        <div className="flex flex-row items-center justify-center gap-1">
          <a href="#" className='text-gray-400 text-sm cursor-pointer'>
            Don't have an account?
          </a>
          <a href="/register" className='text-green-400 text-sm cursor-pointer font-semibold
            relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-green-400
            hover:after:w-full after:transition-all after:duration-300 hover:text-green-300 transition-colors duration-300'>
            Signup for Spotify
          </a>
        </div>

      </div>
    </div>
  )
}

export default Login