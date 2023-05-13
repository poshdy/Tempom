import React from "react";
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
      <section className={``}>
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
      </section>
      <section className={``}>
        <h1 className={`${styles.mainText}`}>Popular Artists</h1>
        <div className="p-2 md:p-8 bg-black rounded-2xl shadow-md shadow-black/50 w-full">
          <Swiper className="w-full" slidesPerView={4}>
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
      </section>

      </div>
      <Banner />
    </>
  );
};

export default Home;
