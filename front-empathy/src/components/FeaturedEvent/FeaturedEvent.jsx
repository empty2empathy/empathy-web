import React, { useState } from "react";
import "./FeaturedEvent.scss";
import FeaturedEventInfo from "components/FeaturedEventInfo";
import FeaturedYoutube from "components/FeaturedYoutube";
import LottieTogglePlay from "components/LottieTogglePlay";
import { shareLink } from "../../utils";


const FeaturedEvent = ({ featuredEvent }) => {
    const [isYoutubePlay, setIsYoutubePlay] = useState(false);
    const [youtubeRef, setYoutubeRef] = useState(null);

    function togglePlay() {
        if (youtubeRef) {
            isYoutubePlay ? youtubeRef.pauseVideo() : youtubeRef.playVideo();
        }
    }

    if (!featuredEvent) return null;
    const { youtubeVideoId, location, title, description } = featuredEvent;
    return (
        <div className="FeaturedEvent">
            <FeaturedYoutube
                youtubeVideoId={youtubeVideoId}
                isYoutubePlay={isYoutubePlay}
                setIsYoutubePlay={setIsYoutubePlay}
                setYoutubeRef={setYoutubeRef}
                togglePlay={togglePlay}/>
            <div className="info-wrapper">
                <span className="event-location">{location.name}</span>
                <p className="event-title">
                    {title}
                </p>
                <button>
                    <LottieTogglePlay onClick={togglePlay} />
                </button>
            </div>
            <div className="featured-event-info">
                <FeaturedEventInfo featuredEvent={featuredEvent}
                                   ctaFunc={() => shareLink(title, description)}
                                   ctaLabel="공유하기"/>
            </div>
        </div>
    );
};

export default FeaturedEvent;
