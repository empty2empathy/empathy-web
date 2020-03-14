import React from 'react';
import "./FeaturedEvent.scss";
import FeaturedEventInfo from "components/FeaturedEventInfo";
import FeaturedYoutube from "components/FeaturedYoutube";


const FeaturedEvent = ({ featuredEvent }) => {
    if (!featuredEvent) return null;
    return (
        <>
            <FeaturedYoutube youtubeVideoId={featuredEvent.youtubeVideoId}/>

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
