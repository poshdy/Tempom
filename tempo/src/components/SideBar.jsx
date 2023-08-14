import React from "react";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { BiHome, BiLogOut, BiSearch } from "react-icons/bi";

import { MdMic } from "react-icons/md";

const SideBar = () => {
  return (
    <aside className="sticky left-0 top-0 h-screen w-[10%] bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
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