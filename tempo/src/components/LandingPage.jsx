import React from "react";
import { styles } from "../styles";
import { BsDiscFill, BsMusicNoteBeamed } from "react-icons/bs";
import { GiMicrophone } from "react-icons/gi";
import { FaHeadphonesAlt } from "react-icons/fa";

const size = 30;

const LandingPage = () => {
  return (
    <>
      <section className={`bg-black rounded-2xl ${styles.Container} drop-shadow-lg md:hover:w-[89%] duration-500 ease-in-out `}>     
      <h1 className={`text-5xl md:text-7xl font-black text-center uppercase py-4 ${styles.MainColor} `}>All in One place </h1>
      <div className=" w-[50%] mx-auto text-center flex items-center py-8 justify-center md:justify-around gap-5 h-full">
        <h3 className="flex flex-col items-center gap-2 hover:text-[#DB35E5]  duration-500 ease-in-out">
          <BsDiscFill  size={size} />
          Tracks 
        </h3>
        <h3 className="flex flex-col items-center gap-2 hover:text-[#DB35E5] duration-500 ease-in-out">
          <BsMusicNoteBeamed size={size} />
          Lyrics
        </h3>
        <h3 className="flex flex-col items-center gap-2 hover:text-[#DB35E5] duration-500 ease-in-out">
          <GiMicrophone  size={size}  />
          Artists
        </h3>
        <h3 className="flex flex-col items-center gap-2 hover:text-[#DB35E5] duration-500 ease-in-out">
          <FaHeadphonesAlt  size={size}  />
         generes
        </h3>
      </div>
      </section>
    </>
  );
};

export default LandingPage;
