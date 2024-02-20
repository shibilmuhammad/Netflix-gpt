import React from 'react'

const VideoTitle = ({title,overView}) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white z-10 bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'> {overView}</p>
        <div className='space-x-2'>
            <button className='bg-white font-semibold px-8 text-lg py-2 rounded-md bg-opacity-80 hover:bg-opacity-100 text-black'> ▶️ Play</button>
            <button  className='bg-slate-100 text-slate-50 px-8 text-lg py-2 rounded-md bg-opacity-20 hover:bg-opacity-40'> ℹ️ More Info </button>
        </div>
    </div>
  )
}

export default VideoTitle
