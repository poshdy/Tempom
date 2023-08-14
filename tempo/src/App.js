import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { MusicPlayer, Favs, SideBar, Searchbar } from "./components";
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
    <div className="relative flex bg-cover bg-no-repeat overflow-y-scroll h-screen  overflow-x-hidden text-white bg-gradient-to-br  from-[#C02425]  to-[#F0CB35] ">
      <SideBar/>
      <section className="flex-1 space-y-10 gap-4 w-[80%] mx-auto px-6 ">
      <Searchbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/artists/:id" element={<ArtistDetails />} />
        <Route path="/albums/:albumid" element={<AlbumDetails />} />
        <Route path="/songs/:songid" element={<SongDetails />} />
        <Route path="/search/:searchTerm" element={<Search />} />
      </Routes>
      </section>

      {activeSong?.title ? (
        <div className="fixed h-28 bottom-0 left-0 right-0 flex bg-white bg-opacity-20 drop-shadow-lg rounded-t-2xl backdrop-blur-lg z-50">
          <MusicPlayer />
        </div>
      ) : null}
    </div>
  );
};

export default App;
// from-[#C02425]  to-[#F0CB35]
// from-[#FFB75E] to-[#ED8F03]