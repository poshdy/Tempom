import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Loader, SongCard } from "../components";
import { useGetSearchTermQuery } from "../redux/services/shazamApi";
import { styles } from "../styles";
const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching } = useGetSearchTermQuery(searchTerm);
  const songs = data?.tracks?.hits.map((song) => song.track);
  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;
  return (
    <div className={`flex flex-col ${styles.Container} ${styles.Space}`}>
      <h2 className={`${styles.mainText}`}>
        Showing results for
        <span className={`font-black uppercase pl-1 ${styles.ThirdColor}`}>
          {searchTerm}
        </span>
      </h2>
      <div className={`flex flex-wrap  justify-center  gap-8 `}>
        {songs.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
      <div className={`flex flex-wrap justify-center  p-5 bg-black/60  ${styles.Rounded}   gap-8 my-8`}>
        {data?.artists?.hits.map((artist) => (
          <div className="flex flex-col  items-center gap-2">
            <img
              className="w-[250px] rounded-full  aspect-square"
              src={artist.artist.avatar}
            />
            <Link to={`/artists/${artist.artist.adamid}`}>
              <h1 className="font-bold text-white ">{artist?.artist.name}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
