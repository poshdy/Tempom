import React, { useState } from "react";
import { SongCard, Loader } from "../components/index";
import {
  useGetAllChartsListIdQuery,
  useGetAllChartsQuery,
} from "../redux/services/shazamApi";
import { useSelector } from "react-redux";
import { styles } from "../styles";

const Discover = () => {
  const [listId, setListId] = useState("");
  const { data: listid } = useGetAllChartsListIdQuery();
  const { data, isFetching, isLoading } = useGetAllChartsQuery({ listId });
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  return (
    <>
      {isFetching || (isLoading && <Loader />)} 
      <div
        className={`${styles.Container} ${styles.Space} bg-black ${styles.Rounded} p-10`}
      >
        <div className="flex md:flex-row md:justify-between flex-col justify-center items-center ">
          <h1 className={`${styles.mainText} text-center`}>Discover Top Charts</h1>
          <select
            onChange={(e) => setListId(e.target.value)}
            className={`bg-[#373737] outline-none my-3 p-1 rounded-md border-none ${styles.MainColor} `}
          >
            {listid?.global?.genres.map((g) => (
              <option key={g.id} value={g.listid}>
                {g.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {data?.tracks?.map((song, i) => (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data.tracks}
              i={i}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Discover;
