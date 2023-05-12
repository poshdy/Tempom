import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Config";
import { SongBar } from "../components";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
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
      <div className="flex flex-col items-center gap-3 justify-center p-4">
        <h1 className={`${styles.mainText}`}>{user?.name}</h1>
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
