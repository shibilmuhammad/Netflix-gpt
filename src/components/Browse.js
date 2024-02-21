import React, { useEffect } from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'


const Browse = () => {

  const showgptSearch = useSelector((store)=>store.gpt.showgptSearch)

  return (
    <div className=' '>
    
        <Header />
        {showgptSearch?<GptSearch/>:
        <>
         <MainContainer />
         <SecondaryContainer />
         </>
        }
        
       
    </div>
  )
}

export default Browse
