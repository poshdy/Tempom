import React from "react";
import { styles } from "../styles";
import { ImHeart } from "react-icons/im";
import { ImMusic } from "react-icons/im";
import { Link } from "react-router-dom";

const UserLists = () => {
  const size = 180;
  return (
    <section className={`${styles.Container} ${styles.Space}`}>
      <h1 className={`${styles.mainText} py-3`}>Your PlayLists</h1>
      <section
        className={` ${styles.Rounded} h-full flex items-center justify-around p-9 bg-black `}
      >
        <div
          className={`${styles.Rounded} border-4 hover:bg-[#DB35E5] border-white h-[350px] flex flex-col items-center justify-evenly py-3 hover:w-[50%] w-[45%]  duration-300 ease-in-out `}
        >
          <ImHeart className="" size={size} />
          <h3 className={`p-2 ${styles.mainText}`}>Likes</h3>
        </div>
        <div
          className={`${styles.Rounded}  h-[350px] flex flex-col border-4 hover:bg-[#e535a7] border-white items-center justify-evenly py-3 hover:w-[50%]  w-[45%] duration-300 ease-in-out  `}
        >
          <h3 className={`p-2 ${styles.mainText}`}>Recently played</h3>
          <ImMusic size={size} />
        </div>
      </section>
    </section>
  );
};

export default UserLists;
