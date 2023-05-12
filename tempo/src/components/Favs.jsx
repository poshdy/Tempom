import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../styles";
import { BsTrash3 } from "react-icons/bs";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import FavsSongs from "./FavsSongs";

const Favs = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.user.Favs);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const handlePlayClick = ({ song, data, i }) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  return (
    <section className={`${styles.Container}  ${styles.Space} `}>
      <h1 className={`${styles.mainText} py-3`}>Likes</h1>
      <div className={`${styles.Rounded} bg-black p-9 `}>
        {data &&
          data.map((song, i) => (
            <FavsSongs
              key={i}
              activeSong={activeSong}
              data={data}
              isPlaying={isPlaying}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick({ song, data, i })}
              i={i}
              song={song}
            />
          ))}
      </div>
    </section>
  );
};

export default Favs;
