import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { AiOutlineYoutube } from "react-icons/ai";
import {
  useGetSongDetailsQuery,
  useGetRelatedSongQuery,
} from "..//redux/services/shazamApi";
import { styles } from "../styles";
const SongDetails = () => {
  const { songid , id:artistId} = useParams();
  const { data: songData, isFetching: FetchingSong } = useGetSongDetailsQuery({
    songid,
  });
  const {data, isFetching: FetchingRelated } = useGetRelatedSongQuery({
    songid,
  });
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = ({song,data,i}) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  if (FetchingRelated || FetchingSong) {
    return <Loader />;
  }

  return (
    <div className={` ${styles.Container} ${styles.Space}  `}>
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start mb-[100px] w-[70%] mx-auto gap-6 ">

    
      <img
        className="md:w-[50%] w-[60%] h-[30%] object-cover md:h-[20%] shadow-lg duration-300 ease-in-out shadow-black/60  rounded-3xl"
        src={songData?.images?.coverart}
      />

      <div className="flex flex-col items-center justify-center gap-2">
        <h4 className={`${styles.ThirdColor} font-bold text-lg`}>
        
          {songData.sections[0].metadata[2]?.text}
        </h4>
        <h2 className={`${styles.mainText} ${styles.SecColor}`}>
          {songData?.subtitle}
        </h2>
        <h1 className={`${styles.mainText} text-6xl`}>{songData?.title}</h1>
        <p className={`${styles.ThirdColor} font-bold text-lg`}>
          {songData.genres.primary}
        </p>
        <h4 className={`${styles.ThirdColor} font-bold text-center text-lg`}>
        
          {songData.sections[0].metadata[0]?.text}
        </h4>
        <a
          className={`${styles.Rounded} bg-[#4e4e4edd] hover:bg-red-500 duration-300 w-fit p-2`}
          target="_blank"
          href={songData?.sections[2]?.youtubeurl?.actions[0]?.uri}
        >
          <AiOutlineYoutube size={30} />
        </a>

      </div>
      </div>

     <div
        className={`${styles.Container} p-8 ${styles.Rounded} bg-black`}
      >
        <h2
          className={`${styles.mainText} ${styles.MainColor} text-center`}
        >
          Lyrics
        </h2>
        <div className="my-10 flex items-center text-center justify-center">
          <div className="">
            {songData?.sections[1]?.type === "LYRICS" ? (
              songData?.sections[1]?.text.map((line, i) => (
                <p key={i} className={`${styles.SecColor}`}>
                  {line}
                </p>
              ))
            ) : (
              <p className="text-gray-500 font-bold">Sorry no lyrics found</p>
            )}
          </div>
        </div>
      </div>
      <RelatedSongs
        data={data}
        activeSong={activeSong}
        artistId={artistId}
        isPlaying={isPlaying}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;


