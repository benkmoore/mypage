import React from 'react';
import ReactPlayer from "react-player"


function Video(props) {
  return (
    <div>
      {/* <div className="video-title">
        <h2>{props.title}</h2>
      </div> */}
      <div className="video-display">
        <ReactPlayer
          url={props.url}
        />
      </div>
    </div>
  )
}

export default Video;
