import dynamic from "next/dynamic";
import React from "react";
import CancelIcon from "../../icons/CancelIcon";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoPlayCom({ url, setVideo }) {
  return (
    <div className="duration-300 opacity-0 pointer-events-none [&.active]:opacity-100 [&.active]:pointer-events-auto fixed bg-black/50 py-8 z-50 inset-0 w-full flex items-center justify-center overflow-y-auto h-screen active">
      <button
        onClick={() => setVideo(false)}
        className="absolute hover:text-red-600 flex justify-center items-center top-4 right-4 size-6 bg-white rounded-full"
      >
        <CancelIcon />
      </button>
      <div className="px-4 w-full lg:w-8/12 min-h-[calc(100vh-80px)] flex items-center justify-center">
        {url ? (
          <ReactPlayer className="bg-black" url={url} />
        ) : (
          <div className="w-full aspect-video bg-black flex justify-center items-center text-white font-semibold">Video not found</div>
        )}
      </div>
    </div>
  );
}
