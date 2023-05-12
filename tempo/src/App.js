import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { NavBar, MusicPlayer, Favs } from "./components";
import {
  ArtistDetails,
  Discover,
  Search,
  SongDetails,
  Home,
  AlbumDetails,
} from "./pages";
const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  return (
    <div className="relative text-white  ">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/artists/:id" element={<ArtistDetails />} />
        <Route path="/albums/:albumid" element={<AlbumDetails />} />
        <Route path="/songs/:songid" element={<SongDetails />} />
        <Route path="/search/:searchTerm" element={<Search />} />
      </Routes>

      {activeSong?.title ? (
        <div className="fixed h-28 bottom-0 left-0 right-0 flex bg-black rounded-t-2xl backdrop-blur-lg z-10">
          <MusicPlayer />
        </div>
      ) : null}
    </div>
  );
};

export default App;
