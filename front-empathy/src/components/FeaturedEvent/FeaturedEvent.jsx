import React, { useState } from 'react';
import YouTube from "react-youtube";
import "./FeaturedEvent.scss";
import FeaturedEventInfo from "components/FeaturedEventInfo";


const FeaturedEvent = ({ featuredEvent }) => {
    // youtube 비디오 있으면 보여주고, 없으면 default 비디오 보여주기
    const [youtubeRef, setYoutubeRef] = useState(null);
    const [isYoutubePlay, setIsYoutubePlay] = useState(false);

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
        console.log('_onStateChange', e);
        if (e.data === 1) {
            setIsYoutubePlay(true);
        } else {
            setIsYoutubePlay(false);
        }
    }

    const opts = {
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            start: 30,
            controls: 0,
            fs: 0,
            playsinline: 1
        }
    };

    if (!featuredEvent) return null;
    return (
        <>
            <div className="video-overlay" onClick={togglePlay}/>
            <div className="youtube">
                <YouTube
                    className="youtube"
                    videoId="vRzwREOQn3s"
                    opts={opts}
                    onReady={_onReady}
                    onStateChange={_onStateChange}
                />
            </div>

            <div className="info-wrapper">
                <div className="event-title">
                    <span className="title">{featuredEvent.title}</span>
                    <span className="now">Now</span>
                </div>

                <FeaturedEventInfo featuredEvent={featuredEvent}/>

                <div className="insta-share">
                    <span className="sharing-link">인스타그램 공유하기 &rarr;</span>
                </div>
            </div>
        </>
    )
};

export default FeaturedEvent
