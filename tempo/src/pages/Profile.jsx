import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/Config";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/features/userSlice";
import { styles } from "../styles";

const Profile = ({ setProfile }) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signout = () => {
    auth.signOut();
    dispatch(logout());
    setProfile(false);
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col items-center gap-3 justify-center w-full  p-4">
        <h1 className={`font-black text-2xl ${styles.SecColor} text-center`}>{user?.name}</h1>
        <Link className={`${styles.mainText} text-[#e535a7]`} to={'/favs'}>Your Likes</Link>
        <div
          onClick={signout}
          className={` bg-transparent border-2 border-white cursor-pointer rounded-md  w-fit`}
        >
          <p className={`${styles.MainColor} flex items-center gap-1 p-2`}>
            Sign out
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
