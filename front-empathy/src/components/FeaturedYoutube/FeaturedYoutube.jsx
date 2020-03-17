import React, { useState } from "react";
import "./FeaturedYoutube.scss";
import YouTube from "react-youtube";

const FeaturedYoutube = ({ youtubeVideoId }) => {
  if (!youtubeVideoId) youtubeVideoId = "yXrlhebkpIQ";
  const [youtubeRef, setYoutubeRef] = useState(null);
  const [isYoutubePlay, setIsYoutubePlay] = useState(false);
  const opts = {
    width: "100%",
    playerVars: {
      start: 30,
      controls: 0,
      fs: 0,
      playsinline: 1
    }
  };

  function togglePlay() {
    if (youtubeRef) {
      isYoutubePlay ? youtubeRef.pauseVideo() : youtubeRef.playVideo();
    }
  }

  function _onReady(event) {
    // access to player in all event handlers via event.target
    setYoutubeRef(event.target);
  }

  function _onStateChange(e) {
    if (e.data === 1) {
      setIsYoutubePlay(true);
    } else {
      setIsYoutubePlay(false);
    }
  }

  return (
    <div className="FeaturedYoutube">
      <div className="video-overlay" onClick={togglePlay} />
      <div className="youtube">
        <YouTube
          className="youtube"
          videoId={youtubeVideoId}
          opts={opts}
          onReady={_onReady}
          onStateChange={_onStateChange}
        />
      </div>
    </div>
  );
};

export default FeaturedYoutube;
