import React, { useState } from "react";
import "./FeaturedEvent.scss";
import FeaturedEventInfo from "components/FeaturedEventInfo";
import FeaturedYoutube from "components/FeaturedYoutube";
import { shareLink } from "utils";
import Play from "assets/svg/play"


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
        <>
            <FeaturedYoutube
                youtubeVideoId={youtubeVideoId}
                isYoutubePlay={isYoutubePlay}
                setIsYoutubePlay={setIsYoutubePlay}
                setYoutubeRef={setYoutubeRef}
                togglePlay={togglePlay} />

            <div className="info-wrapper">
                <span className="event-location">{location}</span>
                <p className="event-title">
                    {title}
                </p>
                <button onClick={togglePlay}>
                    <Play
                        width={24}
                        height={24}
                        color={"white"}
                        style={{ padding: "6px" }}
                    />
                </button>
            </div>
            {/* <FeaturedEventInfo featuredEvent={featuredEvent} /> */}
            <div className="featured-event-info">
                <FeaturedEventInfo featuredEvent={featuredEvent} />
            </div>

            <div className="share">
                <span className="sharing-link"
                    onClick={() => shareLink(title, description)}>
                    인스타그램 공유하기 &rarr;
                </span>
            </div>
        </>
    );
};

export default FeaturedEvent;
