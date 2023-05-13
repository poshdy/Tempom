import React, {useState } from "react";
import { Link} from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsDisc } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import Searchbar from "./Searchbar";
import { styles } from "../styles";
import logo from "../assets/m2.png";
import Login from "./Login";
import { useSelector } from "react-redux";
import { BsSuitHeart } from "react-icons/bs";
import Profile from "../pages/Profile";


const size = 45;
const style =
  "bg-[#3D3D3D]/40 hover:text-[#DB35E5]  duration-300 ease-in-out rounded-md p-2";
const NavBar = () => {
  const [search, setSearch] = useState(false);
  const [login, setLogin] = useState(false);
  const [profile, setProfile] = useState(false);
  const { user } = useSelector((state) => state.user);
  const handleClick = () => {
    setLogin(!login);
  };
  const handleClickProfile = ()=>{
    setProfile(!profile);
  }
  return (
    <div>
      <div className="fixed z-50 md:left-2 top-0 md:top-20 rounded-lg mx-auto  w-full md:w-[100px] h-[70px] md:h-[80%] flex flex-row md:flex-col  items-center justify-evenly bg-black drop-shadow-2xl">
        <Link to={"/"}>
          <img className="w-16 `rounded-lg" src={logo} alt="" />
        </Link>
        <Link to={"/"}>
          <AiOutlineHome className={style} size={size} />
        </Link>
        <Link to={"/discover"}>
          <BsDisc className={style} size={size} />
        </Link>
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
    </div>
  );
};

export default NavBar;
