import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { BiHome, BiLogOut, BiSearch } from "react-icons/bi";

import { MdMic } from "react-icons/md";

const size = 25;
const SideBar = () => {
  const [search, setSearch] = useState(false);
  const [login, setLogin] = useState(false);
  const [profile, setProfile] = useState(false);
  const { user } = useSelector((state) => state.user);
  const handleClick = () => {
    setLogin(!login);
  };
  const handleClickProfile = () => {
    setProfile(!profile);
  };
  return (
    <aside className="sticky left-0 top-0 h-screen w-[10%] bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
      {/* <span className="flex md:hidden" onClick={()=>setSearch(!search)}><BsMenuButton size={20}/></span> */}
      <nav
        className={` hidden md:flex flex-col items-start justify-around w-full h-full px-5 py-3`}
      >
        <Link to={'/'} className="font-extrabold tracking-tighter leading-tight text-4xl">
          TEMPO
        </Link>
        <div className="font-medium text-xl flex items-start gap-1 flex-col">
          <Link to={"/"}>Browse</Link>
          <Link to={"/"}>Search</Link>
        </div>
        <div className="font-medium text-xl flex items-start gap-1 flex-col">
          <h1 className="text-sm font-bold text-white/80 ">Libariy</h1>
          <Link to={"/discover"}>Discover</Link>
          <Link to={"/discover"}>Genres</Link>
          <Link to={"/"}>Top Artists</Link>
        </div>
        <div className="font-medium text-xl flex items-start gap-1 flex-col">
          <h1 className="text-sm font-bold text-white/80 ">My Account</h1>
          <Link to={"/"}>Likes</Link>
          <Link to={"/"}>Logout</Link>
        </div>
      </nav>
      <nav className={`flex flex-col w-full h-full justify-center md:hidden`}>
        <div className="font-medium text-xl flex items-start gap-1 flex-col">
          <Link to={"/"}>
            <BiHome size={20} />
          </Link>
          <Link to={"/"}>
            <BiSearch size={20} />
          </Link>
        </div>
        <div className="font-medium text-xl flex items-start gap-1 flex-col">
          {/* <h1 className="text-sm font-bold text-white/80 ">Libariy</h1> */}

          <Link to={"/"}>
            <MdMic size={20} />
          </Link>
          <Link to={"/"}>
            <MdMic size={20} />
          </Link>
          <Link to={"/"}>
            <MdMic size={20} />
          </Link>
        </div>
        <div className="font-medium text-xl flex items-start gap-1 flex-col">
          {/* <h1 className="text-sm font-bold text-white/80 ">My Account</h1> */}
          <Link to={"/"}>
            <BsHeart size={20} />
          </Link>
          <Link to={"/"}>
            <BiLogOut size={20} />
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
{
  /* <div>
<div className="fixed z-50 md:left-2 top-0 md:top-20 rounded-lg mx-auto  w-full md:w-[100px] h-[70px] md:h-[80%] flex flex-row md:flex-col  items-center justify-evenly bg-black drop-shadow-2xl">

  <BiSearchAlt
    onClick={() => setSearch(!search)}
    className={style}
    size={size}
  />

  {!user && (
    <FiLogIn onClick={handleClick} className={style} size={size} />
  )}
  {user && (
   
      <CgProfile onClick={handleClickProfile} className={style} size={size} />
  
  )}
  {user && (
    <Link to={"/favs"}>
      <BsSuitHeart className={style} size={size} />
    </Link>
  )}
</div>
<div
  className={` w-full flex items-center justify-center duration-300 ease-in-out ${
    search ? "fixed top-16 md:top-2 z-50" : "fixed top-[-100%]"
  }`}
>
  <Searchbar />
</div>
<div
  className={
    login
      ? `fixed left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] z-50 bg-[#3D3D3D] w-[60%] md:w-[40%] aspect-square duration-100 ease-in-out ${styles.Rounded}  `
      : `fixed top-[-100%]  duration-100 ease-in-out`
  }
>
 
  <Login setLogin={setLogin} />
</div>
<div
  className={
    profile
      ? `fixed left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] z-50 bg-[#3D3D3D] w-[500px] aspect-square duration-100 ease-in-out ${styles.Rounded}  `
      : `fixed top-[-100%]  duration-100 ease-in-out`
  }
>
  <Profile setProfile={setProfile} />
</div>
</div> */
}
