import React, { useState } from 'react'
 import Header from './Header'
const Login = () => {
  const[isSignIn,setIsSignIn] = useState(true);
  function toggleSignInForm(){
    setIsSignIn(!isSignIn)
  }
  return (
    <div className=''>
        <Header />
        <div className='absolute '>
            <img className='brightness-75' alt='background' src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img>
        </div>
       <form className=' bg-opacity-80 text-white absolute bg-black w-3/12 my-36 p-12 right-0 left-0 mx-auto rounded-lg'>
         <h1 className='font-bold text-3xl py-4'>{isSignIn ?'Sign In':'Sign Up'}</h1>
         {
            !isSignIn&& <input type='text' placeholder='Full name' className='p-3 w-full my-4 rounded-sm bg-gray-700'></input>
         }
       
         <input type='email' placeholder='Email Address' className='p-3 w-full my-4 rounded-sm bg-gray-700'></input>
         <input type='password' placeholder='Password Here' className='p-3 w-full my-4 rounded-sm bg-gray-700'></input>
         <button className='w-full p-3 my-6 bg-red-700 rounded-lg'>{isSignIn ?'Sign In':'Sign Up'} </button>
         <p onClick={toggleSignInForm} className='cursor-pointer'>{isSignIn?'New to Netflix ?? Sign Up now!!':'Already a Member?? Sign in now!!'}</p>
       </form>
    </div>
  )
}

export default Login
