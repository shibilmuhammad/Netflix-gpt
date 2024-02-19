import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/fireBase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((store)=>store.user)
  const navigate = useNavigate()
  const handleSignOUt = ()=>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });

  }
  return (
    <div className=' px-28 py-2 z-10 absolute bg-gradient-to-b from-black w-screen flex items-center justify-between'>
        <img src='
        https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Logo' className='w-48  '>

        </img>

       { user &&   <div className='flex space-x-3 items-center'>
          <p className='text-xl capitalize text-white font-bold'>{user?.displayName}</p>
          <button onClick={handleSignOUt} className='bg-red-700 text-white p-3 h-1/2 rounded-md h'>LogOut</button>
        </div>
        }
    </div>
  )
}

export default Header
