import React from 'react';
import YouTube from "react-youtube";
import "./FeaturedEvent.scss";
import FeaturedEventInfo from "components/FeaturedEventInfo";


const FeaturedEvent = ({ featuredEvent }) => {
    let youtubeRef;

    const _onReady = event => {
        // access to player in all event handlers via event.target
        youtubeRef = event.target;
    };

    const opts = {
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            start: 30
        }
    };

    return (
        <>
            <div className="video-overlay"
                 onClick={() => {
                     // youtubeRef.playVideo();
                 }}/>
            <div className="youtube">
                <YouTube
                    className="youtube"
                    videoId="xnS2tbgcTc0"
                    opts={opts}
                    onReady={_onReady}
                />
            </div>

            <div className="black-background">
                <div className="event-title">
                    <span className="title">{featuredEvent && featuredEvent.title}</span>
                    <span className="now">Now</span>
                </div>

                <FeaturedEventInfo featuredEvent={featuredEvent}/>

                <div className="insta-share">
                    <a className="sharing-link">인스타그램 공유하기 &rarr;</a>
                </div>
            </div>
        </>
    )
};

export default FeaturedEvent
