import React, { useEffect, useState } from "react";
import {
  ArtistCard,
  Banner,
  LandingPage,
  Loader,
  SongBar,
  TopSong,

} from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "../styles";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
const Home = () => {
  const [slides , setSlides] = useState(false)

   

  useEffect(()=>{
    const calcWidth = ()=>{
      if(window.innerWidth <= 700){
        setSlides(true)
      }else{
        setSlides(false)
      }

    }
    window.addEventListener('resize' , calcWidth)
    return ()=> window.removeEventListener('resize',calcWidth)
  },[])
    
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, isLoading } = useGetTopChartsQuery();
  const topPlays = data?.tracks.slice(0, 13);
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = ({ song, data, i }) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  if(isFetching || isLoading){
    return <Loader/>
  }
  return (
    <>
      <TopSong data={data} />
      <LandingPage />
      <div className={`${styles.Container} ${styles.Space}`}>
      <>
        <h1 className={`${styles.mainText}`}>Popular Tracks</h1>
        <div className="p-8 bg-black rounded-2xl shadow-md shadow-black/50 w-full">
          {topPlays?.map((song, i) => (
            <SongBar
              key={i}
              song={song}
              i={i}
              data={data}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick({ song, data, i })}
            />
          ))}
        </div>
      </>
      <>
        <h1 className={`${styles.mainText} py-3 mt-5`}>Popular Artists</h1>
        <div className={`p-2 bg-black ${styles.Rounded} `}>
          <Swiper  slidesPerView={slides ? 3 : 6}>
            {topPlays?.map((song, i) => (
              <SwiperSlide key={i}>
                <ArtistCard
                  track={song}
                  i={i}
                  data={topPlays}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>

      </div>
      <Banner />
    </>
  );
};

export default Home;
