import React from "react";
import "./video.css";
const Video = () => {
  return (
    <iframe
      title="rm"
      src={
        "https://www.youtube.com/embed/TgqiSBxvdws?si=bs2_upfMX75GEQrT&autoplay=1"
      }
      width="100%"
      //   frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      className="embed-video"
    />
  );
};

export default Video;
