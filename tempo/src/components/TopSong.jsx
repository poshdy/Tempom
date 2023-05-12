import React from 'react'
import { styles } from '../styles';
import PlayPause from './PlayPause';
import { Swiper , SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
import "swiper/swiper.min.css";
import { useSelector } from 'react-redux';
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const TopSong = ({data}) => {
    const dispatch = useDispatch()
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const TopSongData =  data?.tracks?.slice(0, 3);
    const handlePlayClick = ({ song,data,i}) => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
      };
      const handlePauseClick = () => {
        dispatch(playPause(false));
      }; 
  return (
    <section className={`${styles.Container} ${styles.Space} cursor-grabbing`}>
        <Swiper autoplay slidesPerView={1} pagination={{clickable:true , bulletActiveClass:true}}>
        {TopSongData?.map((song , i)=>(
        <SwiperSlide key={i}>
        <img className='w-full h-[30%] md:hover:h-[650px] md:h-[600px] shadow-lg duration-300 ease-in-out shadow-black/60 object-cover rounded-3xl' src={song?.images?.background} />
        <span className={`font-black text-5xl ${styles.SecColor}`}>{`#${i+1}`}</span>
        <div  className=''>
            <h1 className={`text-7xl font-black ${styles.MainColor}`}>{song?.title}</h1>
            <h1 className={`text-7xl font-black ${styles.SecColor}`}>{song?.subtitle}</h1>
            <div  className={`flex items-center cursor-pointer text-3xl font-bold ${styles.Gradient1} rounded-xl p-2 shadow-md shadow-black/40 w-fit `}>
            <h1 className='px-1 '>Play</h1>
            <PlayPause isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={()=>handlePlayClick({song,data,i})}/>

            </div>
        </div>

        </SwiperSlide>

        ))}
        </Swiper>
    </section>
  )
}

export default TopSong