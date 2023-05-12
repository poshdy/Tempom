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
    <div className="w-[300px] h-[400px] bg-[#373737] hover:bg-[#0b0b0b]/50 rounded-lg duration-300 ease-in-out flex items-center flex-col cursor-pointer">
      <img
        alt="song_img"
        src={
          song.images?.coverart
            ? song.images?.coverart
            : song.images?.background
        }
        className="w-[250px] mt-2 aspect-square object-cover rounded-lg"
      />
      <div className="w-[80%] flex items-center justify-between">
        <div className="flex flex-col ">
          <p className="font-semibold  w-36 text-lg text-white truncate">
            <Link to={`/songs/${song?.key}`}>{song.title}</Link>
          </p>
          <p className="text-sm w-36 truncate text-gray-300 mt-1">
            <Link
              to={`/artists/${song?.artists[0]?.adamid}` }
            >
              {song.subtitle}
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-1">
        {user && (
          <div onClick={addebe}>
          {clicked ? <AiFillHeart size={30} /> : <AiOutlineHeart size={30} />}
        </div>
      )}
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
