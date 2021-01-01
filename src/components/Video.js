import React from 'react';
import './Video.css';
import video from "./Darth Vader's rage.mp4"

const pVideo = () => {
    return (
      <div className="container">
        <video autoPlay playsInline muted src={video} />
      </div>
    );
  };

function Video () {
    return (
        <div className="Video">
            <div className="video-container">
            <video autoPlay playsInline src="./Darth Vader's rage.mp4"></video>
            </div>
        </div>
    )
}

export default Video;