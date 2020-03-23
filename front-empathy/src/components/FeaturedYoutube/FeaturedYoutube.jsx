import React from "react";
import "./FeaturedYoutube.scss";
import YouTube from "react-youtube";

const FeaturedYoutube = ({ youtubeVideoId, isYoutubePlay, setIsYoutubePlay, setYoutubeRef, togglePlay }) => {
    if (!youtubeVideoId) youtubeVideoId = "yXrlhebkpIQ";
    const opts = {
        width: "100%",
        playerVars: {
            start: 30,
            controls: 0,
            fs: 0,
            playsinline: 1
        }
    };

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
            <div className="video-overlay" onClick={togglePlay}/>
            <div className="youtube">
                {!isYoutubePlay &&
                <img className="thumbnail"
                     alt="thumbnail"
                     src={`https://img.youtube.com/vi/${youtubeVideoId}/0.jpg`}/>
                }
                <YouTube
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
