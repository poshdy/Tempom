import React from 'react'
import SongBar from './SongBar'
import { styles } from '../styles'

const RelatedSongs = ({data , isPlaying , artistId, activeSong , handlePlayClick , handlePauseClick}) => {
  return (
    <div className={` w-full md:${styles.Container} ${styles.Space}`}>

      <h2 className={`${styles.mainText} py-2`}>Related Songs</h2>
    <div className={`flex flex-col ${styles.Rounded} bg-black  p-9`}>
{data?.tracks?.map((song , i)=>(
  <SongBar key={`${song.key}-${artistId}`} artistId={artistId} song={song} data={data} i={i} isPlaying={isPlaying} activeSong={activeSong} handlePauseClick={handlePauseClick} handlePlayClick={()=>handlePlayClick({song,data,i})} />
  ))}
    </div>
  </div>
  )
}

export default RelatedSongs