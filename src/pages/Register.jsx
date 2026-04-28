import React, { useState } from 'react';
import spotifyLogo from './Spotify.png';
import Home from './Home'; 
import { useNavigate,Link } from 'react-router-dom'
import Login from './Login';

function Register() {

  const navigate = useNavigate()
  
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState({ day: '', month: '', year: '' });
  const [gender, setGender] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false)
  const [sharingChecked, setSharingChecked] = useState(false)
  const [registerError, setRegisterError] = useState('')

  const validations = {
    hasLetter: /[a-zA-Z]/.test(password),
    hasNumberOrSpecial: /[0-9!@#$%^&*]/.test(password),
    isLongEnough: password.length >= 10,
  };

  return (
    <div className='bg-black flex justify-center items-center h-screen'>
      <div className="relative flex flex-col items-center justify-start bg-gray-900 rounded-2xl h-[650px] w-[400px] p-8 overflow-hidden">
        
        {/* --- DYNAMIC PROGRESS BAR --- */}
        {step > 1 && (
          <div className="absolute top-0 left-0 w-full h-1 bg-gray-700">
            <div 
              className="h-full bg-green-500 transition-all duration-700 ease-in-out" 
              style={{ width: step === 2 ? '33%' : step === 3 ? '66%' : '100%' }}
            ></div>
          </div>
        )}

        {/* --- STEP 1: EMAIL --- */}
        {step === 1 && (
          <div className="flex flex-col items-center gap-7 w-full animate-in fade-in duration-500">
            <img 
              src={spotifyLogo} 
              alt="Spotify"
              className="rounded-full w-16 h-16 object-contain hover:rotate-[360deg] hover:scale-110 transition-all duration-700 cursor-pointer" 
            />

            <div className="flex flex-col items-center group cursor-default">
              <h1 className="text-white text-4xl font-bold tracking-tight group-hover:tracking-widest transition-all duration-500">
                Sign up to
              </h1>
              <h1 className="text-white text-4xl font-bold tracking-tight group-hover:tracking-widest transition-all duration-500">
                start listening
              </h1>
            </div>

            <input 
              type='email'
              placeholder='Email '
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-70 h-10 text-white cursor-pointer border rounded-2xl border-gray-400 text-center bg-transparent 
              focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/40 focus:shadow-[0_0_15px_rgba(34,197,94,0.3)]
              focus:scale-105 hover:border-gray-300 transition-all duration-300 placeholder-gray-500'
            />

            <button 
              onClick={() => email && setStep(2)}
              className='w-70 h-10 text-black font-bold bg-green-500 cursor-pointer border rounded-2xl border-green-400 hover:scale-110 active:scale-95 transition-all duration-300'
            >
              Next
            </button>

            <div className="flex items-center w-80 gap-3">
              <div className="flex-1 h-px bg-gray-600" />
              <span className="text-gray-400 text-sm">or</span>
              <div className="flex-1 h-px bg-gray-600" />
            </div>

           
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
          </div>
        )}

        {/* --- STEP 2: PASSWORD --- */}
        {step === 2 && (
          <div className="flex flex-col items-start w-full animate-in slide-in-from-right duration-500">
            <button onClick={() => setStep(1)} className="text-gray-400 hover:text-white mb-4 transition-colors">
              <i className="fa-solid fa-chevron-left text-xl"></i>
            </button>
            
            <p className="text-gray-400 text-sm font-semibold mb-1">Step 1 of 3</p>
            <h2 className="text-white text-2xl font-bold mb-6 group cursor-default">
               <span className="group-hover:tracking-widest transition-all duration-500">Create a password</span>
            </h2>

            <div className="w-full mb-6">
              <label className="text-white text-sm font-bold block mb-2">Password</label>
              <div className="relative w-full">
                <input 
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full h-12 text-white border rounded-md bg-transparent px-4 pr-12 focus:outline-none transition-all 
                    ${password.length > 0 && !Object.values(validations).every(Boolean) 
                      ? 'border-red-500' 
                      : 'border-gray-500 focus:border-green-500'}`}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-lg`}></i>
                </button>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <p className="text-white text-xs font-bold">Your password must contain at least</p>
              <ValidationItem label="1 letter" met={validations.hasLetter} />
              <ValidationItem label="1 number or special character" met={validations.hasNumberOrSpecial} />
              <ValidationItem label="10 characters" met={validations.isLongEnough} />
            </div>

            <button 
              onClick={() => Object.values(validations).every(Boolean) && setStep(3)}
              className='w-full h-12 text-black font-bold bg-green-500 rounded-full hover:scale-105 active:scale-95 transition-all disabled:bg-gray-600 disabled:cursor-not-allowed'
              disabled={!Object.values(validations).every(Boolean)}
            >
              Next
            </button>
          </div>
        )}

        {/* --- STEP 3: USER INFO --- */}
        {step === 3 && (
          <div className="flex flex-col items-start w-full animate-in slide-in-from-right duration-500">
            <button onClick={() => setStep(2)} className="text-gray-400 hover:text-white mb-4 transition-colors">
              <i className="fa-solid fa-chevron-left text-xl"></i>
            </button>
            
            <p className="text-gray-400 text-sm font-semibold mb-1">Step 2 of 3</p>
            <h2 className="text-white text-2xl font-bold mb-6">Tell us about yourself</h2>

            <div className="w-full mb-6">
              <label className="text-white text-sm font-bold block mb-1">Name</label>
              <p className="text-gray-400 text-xs mb-2">This name will appear on your profile</p>
              <input 
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full h-12 text-white border rounded-md border-gray-500 bg-transparent px-4 focus:outline-none focus:border-green-500 transition-all'
              />
            </div>

            <div className="w-full mb-6">
              <label className="text-white text-sm font-bold block mb-1">Date of birth</label>
              <div className="grid grid-cols-4 gap-3 mt-4">
                <input 
                  placeholder="yyyy" 
                  className="col-span-1 h-12 bg-transparent border border-gray-500 rounded-md text-white text-center focus:border-green-500 outline-none"
                />
                <select className="col-span-2 h-12 bg-transparent border border-gray-500 rounded-md text-white px-2 focus:border-green-500 outline-none appearance-none">
                                  
                <option className="bg-gray-900" value="">Month</option>

                <option className="bg-gray-900" value="01">January</option>

                <option className="bg-gray-900" value="02">February</option>

                <option className="bg-gray-900" value="03">March</option>

                <option className="bg-gray-900" value="04">April</option>

                <option className="bg-gray-900" value="05">May</option>

                <option className="bg-gray-900" value="06">June</option>

                <option className="bg-gray-900" value="07">July</option>

                <option className="bg-gray-900" value="08">August</option>

                <option className="bg-gray-900" value="09">September</option>

                <option className="bg-gray-900" value="10">October</option>

                <option className="bg-gray-900" value="11">November</option>

                <option className="bg-gray-900" value="12">December</option>
                                  
                </select>
                <input 
                  placeholder="dd" 
                  className="col-span-1 h-12 bg-transparent border border-gray-500 rounded-md text-white text-center focus:border-green-500 outline-none"
                />
              </div>
            </div>

            <div className="w-full mb-8">
              <label className="text-white text-sm font-bold block mb-1">Gender</label>
              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4">
                {['Man', 'Woman', 'Non-binary', 'Something else', 'Prefer not to say'].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer group" onClick={() => setGender(option)}>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all 
                      ${gender === option ? 'border-green-500' : 'border-gray-500 group-hover:border-white'}`}>
                      {gender === option && <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />}
                    </div>
                    <span className={`text-sm ${gender === option ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

        <button 
          type="button"
          onClick={() => {
            // 1. Check if the user has actually filled something in
            if (name.trim() !== "" && gender !== "") {
              setStep(4); // Force move to Step 4 (Terms)
            } else {
              // If they haven't filled it, we can highlight the border or just wait
              console.log("Details missing: Name or Gender");
            }
          }} 
          className={`w-full h-12 text-black font-bold rounded-full transition-all duration-300 ${
            (name.trim() !== "" && gender !== "")
              ? 'bg-green-500 hover:scale-105 active:scale-95' 
              : 'bg-[#535353] cursor-not-allowed opacity-50'
          }`}
        >
          Next
        </button>
          </div>
        )}



        {step === 4 && (
          <div className="flex flex-col items-start w-full animate-in slide-in-from-right duration-500">
          
            <button onClick={() => setStep(3)} className="text-gray-400 hover:text-white mb-4 transition-colors">
              <i className="fa-solid fa-chevron-left text-xl"></i>
            </button>
            
            <p className="text-gray-400 text-sm font-semibold mb-1">Step 3 of 3</p>
            <h2 className="text-white text-2xl font-bold mb-6">Terms & Conditions</h2>

            {/* Checkbox 1: Marketing */}
            <div 
              className="w-full bg-[#242424] p-4 rounded-lg flex items-start gap-3 mb-3 hover:bg-[#2a2a2a] transition-colors cursor-pointer"
              onClick={() => setMarketingChecked(!marketingChecked)}
            >
              <input 
                type="checkbox" 
                className="mt-1 accent-green-500 w-4 h-4 cursor-pointer"
                checked={marketingChecked}
                readOnly 
              />
              <p className="text-white text-sm leading-tight">
                I would prefer not to receive marketing messages from Spotify
              </p>
            </div>

            {/* Checkbox 2: Sharing (Required) */}
            <div 
              className="w-full bg-[#242424] p-4 rounded-lg flex items-start gap-3 mb-6 hover:bg-[#2a2a2a] transition-colors cursor-pointer"
              onClick={() => setSharingChecked(!sharingChecked)}
            >
              <input 
                type="checkbox" 
                className="mt-1 accent-green-500 w-4 h-4 cursor-pointer"
                checked={sharingChecked}
                readOnly
              />
              <p className="text-white text-sm leading-tight">
                Share my registration data with Spotify's content providers for marketing purposes.
              </p>
            </div>

            <div className="text-white text-[11px] space-y-4 mb-8 leading-normal">
              <p>Spotify is a personalised service.</p>
              <p>By clicking on ‘Sign up’, you agree to Spotify’s <span className="text-green-400 underline cursor-pointer">Terms and Conditions of Use</span>.</p>
            </div>

            {/* Error Message */}
            {registerError && (
              <p className="text-red-400 text-xs text-center w-full mb-4 bg-red-400/10 py-2 rounded-xl border border-red-400/30">
                {registerError}
              </p>
            )}

            {/* The Sign Up Button - Now with Logic */}
            <button 
              type="button"
              disabled={!sharingChecked} // Button is physically disabled if not checked
              onClick={() => {
                if (!sharingChecked) return; // Guard clause

                const existingUser = JSON.parse(localStorage.getItem('spotifyUser'));
                if (existingUser && existingUser.email === email) {
                  setRegisterError('An account with this email already exists.');
                  return;
                }

                const userToSave = { email, password, username: name };
                localStorage.setItem('spotifyUser', JSON.stringify(userToSave));
                navigate('/login');
              }}
              className={`w-full h-12 text-black font-bold rounded-full transition-all duration-300 ${
                sharingChecked 
                  ? 'bg-green-500 hover:scale-105 active:scale-95' 
                  : 'bg-[#535353] cursor-not-allowed opacity-50'
              }`}
            >
              Sign up
            </button>
          </div>
        )}         
     </div>
    </div>
  );
}

const ValidationItem = ({ label, met }) => (
  <div className={`flex items-center gap-2 text-sm ${met ? 'text-green-500' : 'text-gray-300'}`}>
    <div className={`w-2 h-2 rounded-full border ${met ? 'bg-green-500 border-green-500' : 'border-gray-500'}`} />
    <span>{label}</span>
  </div>
);

export default Register;