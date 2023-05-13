import React from 'react'
import { useNavigate } from 'react-router-dom'

const ArtistCard = ({track , key}) => {
  const navigate = useNavigate()
  return (
    <div key={key} className='flex flex-col items-center gap-2 w-full hover:bg-[#0b0b0b]/50  text-[#d2d2d2] p-3 rounded-lg duration-300 ease-in-out  cursor-pointer ' onClick={()=>navigate(`/artists/${track?.artists[0].adamid}`)}>
<img src={track?.images?.background } className='w-[100px]  md:w-[250px] aspect-square  object-cover rounded-full' alt='artist-photo' />
<p className='text-white w-20 truncate font-bold text-center'>{track?.subtitle}</p>
    </div>
  )
}

export default ArtistCard