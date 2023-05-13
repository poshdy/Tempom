import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArtistTopHits, Loader } from "../components";
import { useGetArtistSummaryQuery } from "..//redux/services/shazamApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { styles } from "../styles";
const ArtistDetails = () => {
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
  const { id: artistId } = useParams();
  const { data, isFetching, isLoading } = useGetArtistSummaryQuery({
    artistId,
  });

  if (isFetching || isLoading) {
    return <Loader />;
  }
  
  const artistData = Object.values(data?.resources?.artists);
  const albums = Object.values(data?.resources?.albums)
    .reduce((map, ob) => map.set(ob.attributes.name, ob), new Map())
    .values();
  const FilteredAlbums = Array.from(albums);
  const topSongs = Object.values(data?.resources?.songs);
  return (
    <div className={`${styles.Container}`}>
      <div
        className={`flex md:flex-row flex-col md:justify-start md:items-start justify-center items-center gap-2 ${styles.Rounded} ${styles.Space} bg-black p-9`}
      >
        <img
          src={artistData[0]?.attributes?.artwork?.url
            ?.replace("{w}", "250")
            .replace("{h}", "250")}
        />
        <div className="flex items-center md:items-start flex-col gap-3">
          <h1 className={`${styles.mainText} text-center md:text-left`}>
            {artistData[0]?.attributes.name}
          </h1>
          <h3 className={`${styles.Paragraph}`}>
            {artistData[0]?.attributes.genreNames}
          </h3>
        </div>
      </div>
      <div className={`${styles.Space}`}>
        <h1 className={`${styles.mainText} my-2`}>Popular Albums</h1>
        <div className={`${styles.Rounded} bg-black p-9`}>
          <Swiper slidesPerView={slides ? 3 : 6} spaceBetween={10}>
            {FilteredAlbums.map((album, i) => (
              <SwiperSlide key={i}>
                <div className="flex items-center flex-col gap-3">
                  <Link to={`/albums/${album?.id}`}>
                    <img
                      src={album?.attributes?.artwork?.url
                        ?.replace("{w}", "250")
                        .replace("{h}", "250")}
                    />
                  </Link>
                  <h3 className="truncate w-20">{album?.attributes?.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <h1 className={`${styles.mainText} my-3`}>Top Hits</h1>
      <div className={` ${styles.Rounded} bg-black p-9 flex flex-col gap-5`}>
        {topSongs.slice(0,6).map((hit, i) => (
          <ArtistTopHits key={i} data={hit?.attributes} />
        ))}
      </div>
    </div>
  );
};

export default ArtistDetails;
