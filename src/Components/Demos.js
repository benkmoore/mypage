import React, { Component } from "react";

import Video from "./Video";

class Demos extends Component {
  render() {
    if (!this.props.data) {
      return <div className="video-none" />;
    }

    return (
      <section id="demos">
        <div className="video">
          <h1>Demos</h1>
          <ul className="video-list">
            {/* {this.props.data.videos.map((video) => (
              <Video title={video.title} url={video.url}/>
            ))} */}
          </ul>
        </div>
      </section>
    );
  }
}

export default Demos;
