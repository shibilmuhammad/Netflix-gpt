import React, { useRef, useState } from 'react'
 import Header from './Header'
 import { validateForm } from '../utils/validateForm';
 import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
 import { auth } from '../utils/fireBase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const[isSignIn,setIsSignIn] = useState(true);
  const email = useRef(null)
  const password = useRef(null)
  const userName = useRef(null)
  const [validationError,setValidationError] = useState(null)
  function toggleSignInForm(){
    setIsSignIn(!isSignIn)
  }

  const FormSubmit = ()=>{
    const validationResult = validateForm(email.current.value,password.current.value);
    setValidationError(validationResult)
    if(validationResult) return
    if(!isSignIn){
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
      
        const user = userCredential.user;

        updateProfile(user, {
          displayName:userName.current.value
        }).then(() => {
          const {uid,email,displayName} = auth.currentUser;
          console.log('current user :',auth.currentUser);
        
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        }).catch((error) => {
          // An error occurred
          // ...
        });
        navigate('/browse')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setValidationError(errorCode+"-"+errorMessage )
      });
    }else{
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/browse')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setValidationError(errorCode+"-"+errorMessage)
      });
    }
    
  }
  return (
    <div className=''>
        <Header />
        <div className='absolute '>
            <img className='brightness-75' alt='background' src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img>
        </div>
       <form onSubmit={(e)=>e.preventDefault()} className=' bg-opacity-80 text-white absolute bg-black w-3/12 my-36 p-12 right-0 left-0 mx-auto rounded-lg'>
         <h1 className='font-bold text-3xl py-4'>{isSignIn ?'Sign In':'Sign Up'}</h1>
         {
            !isSignIn&& <input ref={userName} type='text' placeholder='Full name' className='p-3 w-full my-4 rounded-sm bg-gray-700'></input>
         }
       
         <input ref={email} type='email' placeholder='Email Address' className='p-3 w-full my-4 rounded-sm bg-gray-700'></input>
         <input ref={password} type='password' placeholder='Password Here' className='p-3 w-full my-4 rounded-sm bg-gray-700'></input>
         <p className='text-red-800 font-bold flex justify-center'>{validationError}</p>
         <button onClick={FormSubmit} className='w-full p-3 my-6 bg-red-700 rounded-lg'>{isSignIn ?'Sign In':'Sign Up'} </button>
        
         <p onClick={toggleSignInForm} className='cursor-pointer'>{isSignIn?'New to Netflix ?? Sign Up now!!':'Already a Member?? Sign in now!!'}</p>
       </form>
    </div>
  )
}

export default Login
