import React from 'react'
import { styles } from '../styles'

const Banner = () => {
    const bannerTexts = ["LIVE", "LISTEN", "VIBE"];
  return (
    <div className={` uppercase flex items-center text-center justify-center font-black text-black ${styles.Gradient1} ${styles.Space} rounded-xl p-2 ${styles.Container}`}>
    {bannerTexts.map((t, i) => (
      <h3 className={`text-4xl  md:6xl lg:text-7xl xl:text-9xl uppercase font-black px-1 md:px-5`} key={i}>
        {t}
      </h3>
    ))}
  </div>
  )
}

export default Banner