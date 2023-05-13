import React from 'react'
const ArtistTopHits = ({data}) => {
  return (
    <div className='w-full flex items-center border-b border-b-white gap-2' >
          <img className="py-2"src={data.artwork?.url.replace('{w}', '75').replace('{h}', '75')}/>
      <div className='w-[80%] mx-auto flex text-center text-gray-400 items-center justify-between'>
        <h1 className='font-bold w-[20%] truncate'>{data.name}</h1>
        <p className='w-[20%] truncate'>{data.artistName}</p>
        <p className='w-[20%] truncate'>{data.albumName}</p>
        <p className='w-[20%] truncate '>{(data.durationInMillis / 60000).toFixed(2)}min</p>
     
      </div>
    </div>
  )
}

export default ArtistTopHits