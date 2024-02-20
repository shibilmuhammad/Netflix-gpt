import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/fireBase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const user = useSelector((store)=>store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
            navigate('/browse')
        } else {
            dispatch(removeUser())
            navigate('/')
        }
      });
      return ()=>unsubscribe()
},[])



  const handleSignOUt = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
    });

  }
  return (
    <div className=' px-24 py-2 z-20 absolute bg-gradient-to-b from-black w-screen flex items-center justify-between'>
        <img src={LOGO} alt='Logo' className='w-48  '>

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
