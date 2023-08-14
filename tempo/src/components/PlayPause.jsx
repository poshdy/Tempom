import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";


const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPause size={25} className='hover:text-white hover:scale-105 text-white duration-300 ease-in-out' onClick={handlePause} />
  ) : (
    <FaPlay  size={25} className='hover:text-white hover:scale-105 text-white duration-300 ease-in-out ' onClick={handlePlay} />
  );

export default PlayPause;
