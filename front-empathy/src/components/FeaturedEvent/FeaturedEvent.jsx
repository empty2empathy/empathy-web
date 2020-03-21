import React, { useState } from "react";
import "./FeaturedEvent.scss";
import FeaturedEventInfo from "components/FeaturedEventInfo";
import FeaturedYoutube from "components/FeaturedYoutube";

const FeaturedEvent = ({ featuredEvent }) => {
    const [isYoutubePlay, setIsYoutubePlay] = useState(false);
    const [youtubeRef, setYoutubeRef] = useState(null);

    function togglePlay() {
        if (youtubeRef) {
            isYoutubePlay ? youtubeRef.pauseVideo() : youtubeRef.playVideo();
        }
    }

    if (!featuredEvent) return null;
    return (
        <>
            <FeaturedYoutube
                youtubeVideoId={featuredEvent.youtubeVideoId}
                isYoutubePlay={isYoutubePlay}
                setIsYoutubePlay={setIsYoutubePlay}
                setYoutubeRef={setYoutubeRef}
                togglePlay={togglePlay}/>

            <div className="info-wrapper">
                <p className="event-location">{featuredEvent.location}</p>
                <p className="event-title">
                    <span className="title">{featuredEvent.title}</span>
                </p>
                <button onClick={togglePlay}>play</button>

                <FeaturedEventInfo featuredEvent={featuredEvent}/>

                <div className="share">
                    <span className="sharing-link">인스타그램 공유하기 &rarr;</span>
                </div>
            </div>
        </>
    );
};

export default FeaturedEvent;
