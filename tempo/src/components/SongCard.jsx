import React, { useState } from "react";
import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";
import { useDispatch } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Config";
import { addSongsToFavs } from "../redux/features/userSlice";
const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const [user] = useAuthState(auth);
  const [clicked, setClicked] = useState(false);
  const dispach = useDispatch();
  const handlePlayClick = () => {
    dispach(setActiveSong({ song, data, i }));
    dispach(playPause(true));
  };
  const handlePauseClick = () => {
    dispach(playPause(false));
  };
  const addebe = () => {
    dispach(addSongsToFavs(song));
    setClicked(!clicked);
  };
  return (
    <div className="relative rounded-2xl group duration-300 ease-in-out overflow-clip">
      <img
        className="w-full h-full object-cover -z-50"
        src={song?.images?.coverart}
      />

      <div className="w-full cursor-pointer absolute z-50 bottom-0 left-0 py-4 h-32 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg flex flex-col items-center gap-2">
        <Link
          className="font-bold text-lg text-white w-[50%] truncate text-center"
          to={`/songs/${song?.key}`}
        >
          {song.title}
        </Link>

        <Link
          className="font-medium text-sm text-white/80"
          to={`/artists/${song?.artists[0]?.adamid}`}
        >
          {song.subtitle}
        </Link>
      </div>

      <div className="hidden group-hover:block duration-300 ease-in-out absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full bg-white bg-opacity-20 "> 
      <div className="flex justify-center items-center w-full h-full cursor-pointer">

        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          />
          </div>
      </div>
    </div>
  );
};

export default SongCard;
