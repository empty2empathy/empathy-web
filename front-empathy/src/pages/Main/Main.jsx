import React from "react";
import YouTube from "react-youtube";
import { Frame } from "framer";
import "./Main.scss";

function Main() {
  let youtubeRef;

  const _onReady = event => {
    // access to player in all event handlers via event.target
    youtubeRef = event.target;
  };

  const opts = {
    // height: '390',
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      start: 30
    }
  };

  return (
    <div className="Main">
      <div
        className="fuck"
        onClick={() => {
          youtubeRef.playVideo();
        }}
      ></div>
      <div className="youtube">
        <YouTube
          className="youtube"
          videoId="QrR_gm6RqCo"
          opts={opts}
          onReady={_onReady}
        />
        {/* <iframe
          width="792"
          height="446"
          src="https://www.youtube.com/embed/QrR_gm6RqCo"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
      </div>
      <div className="shit">
        <h1>Service title</h1>
        <p>
          description description description description description
          description
        </p>
      </div>

      <div className="performance-info-container">
        <div>
          <div>Fab 17, Mon</div>
          <div className="item">
            <h4>Event title</h4>
          </div>
        </div>
      </div>

      <Frame
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
        size={150}
        background={"#f2f2f2"}
        radius={30}
      />
    </div>
  );
}

export default Main;
