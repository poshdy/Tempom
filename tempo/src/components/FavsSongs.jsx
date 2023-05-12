import React from 'react'
import { styles } from '../styles'
import { Link } from 'react-router-dom'
import PlayPause from './PlayPause'
import { BsTrash } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { removeFav } from '../redux/features/userSlice'

const FavsSongs = ({song,i,isPlaying,activeSong,handlePauseClick,handlePlayClick,data}) => {
    const dispatch = useDispatch()

  
  return (
    <div
      className={`w-full flex flex-row items-center hover:bg-[#e535a7] duration-100 ${
        activeSong?.title === song?.title ? "bg-[#DB35E5]" : "bg-transparent"
      } py-2 p-4 rounded-lg cursor-pointer mb-2`}
    >
      <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          className="w-16 aspect-square object-cover  md:w-20 h-20 rounded-lg"
          src={song?.images?.coverart? song?.images?.coverart: song?.images?.background}
          alt={song?.title}
        />
        <div className="flex-1 flex flex-col justify-center mx-3">
          
            <Link to={`/songs/${song.key}`}>
              <p className={` text-lg md:text-xl  truncate w-28 font-bold  ${styles.MainColor}`}>
                {song?.title}
              </p>
            </Link>
        

          <p className="text-base text-gray-300 mt-1">
            {song?.subtitle}
          </p>
        </div>
      </div>

      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        data={data}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick(song, data, i)}
      />
      <BsTrash size={20} onClick={()=>dispatch(removeFav(song))}/>
    </div>
  )
}

export default FavsSongs