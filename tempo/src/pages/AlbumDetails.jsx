import React from "react";
import { useParams } from "react-router-dom";
import { useGetAlbumDetailsQuery } from "../redux/services/shazamApi";
import { Loader } from "../components";

const AlbumDetails = () => {
  const { albumid } = useParams();
  const { data, isFetching, isLoading } = useGetAlbumDetailsQuery({ albumid });

  const trackList = data?.data[0]?.relationships?.tracks;

  if (isFetching || isLoading) {
    return <Loader />;
  }
  return (
    <div className="w-[80%] mx-auto my-20">
      <>
        {data?.data?.map((al) => (
          <div className="">
            <img
              src={al.attributes?.artwork?.url
                .replace("{w}", "450")
                .replace("{h}", "450")}
            />
            <h1 className="font-black text-6xl">{al.attributes.name}</h1>
            <p>{al.attributes.releaseDate}</p>
            <p>{al.attributes.trackCount}</p>
            <p>{al.attributes.recordLabel}</p>
          </div>
        ))}
      </>
      <div className="flex flex-col gap-2 mt-20">
        <h1 className="text-5xl font-black text-white mb-2 text-center">
          Track List
        </h1>
        {trackList?.data?.map((track) => (
          <div className="flex items-center gap-2 p-3  border-b-2 border-white hover:border-none hover:bg-[#e535a7] hover:text-black hover:rounded-lg duration-200 ease-in-out  ">
            <h2 className="text-xl font-bold">{`#${track.attributes.trackNumber}`}</h2>
            <img
              src={track.attributes.artwork.url
                .replace("{w}", "150")
                .replace("{h}", "150")}
            />
            <>
              <h1 className="text-2xl font-bold">{track.attributes.name}</h1>
              {/* <p className="text-gray-500">{track.attributes.artistName}</p> */}
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumDetails;
