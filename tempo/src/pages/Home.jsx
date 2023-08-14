import React, { useEffect, useState } from "react";
import { Banner, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { useSelector, useDispatch } from "react-redux";

// import { playPause, setActiveSong } from "../redux/features/playerSlice";
const Home = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: Toplays, isFetching, isLoading } = useGetTopChartsQuery();

  // const dispatch = useDispatch();
  // const handlePauseClick = () => {
  //   dispatch(playPause(false));
  // };
  // const handlePlayClick = ({ song, data, i }) => {
  //   dispatch(setActiveSong({ song, data, i }));
  //   dispatch(playPause(true));
  // };
  if (isFetching || isLoading) {
    return <Loader />;
  }
  return (
    <section className="w-full">
      <h3 className="font-bold tracking-tighter leading-tight text-3xl md:text-4xl lg:text-6xl">
        Listen Now
      </h3>
      <div className="w-full flex flex-wrap items-start gap-3 my-3">
        {Toplays?.tracks?.map((song) => (
          <SongCard
            song={song}
            data={Toplays?.tracks}
            isPlaying={isPlaying}
            activeSong={activeSong}
            key={song.key}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;

{
  /* <>
        <h1 className="tex-2xl">Popular Artists</h1>
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
      </> */
}

<Banner />;
