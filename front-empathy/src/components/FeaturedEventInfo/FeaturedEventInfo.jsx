import React from "react";
import "./FeaturedEventInfo.scss";
import { formatTime, shareLink } from "utils";

const FeaturedEventInfo = ({ featuredEvent }) => {
    if (!featuredEvent) return null;
    const { title, description, location, date, artists, programType } = featuredEvent;
    const artistStr = artists.map(v => v.name).join(", ");
    return (
        <div className="FeaturedEventInfo">
            <div className="info">
                <span className="title">Location</span>
                <span className="description">{location}</span>
            </div>
            <div className="info">
                <span className="title">Start Performance</span>
                <span className="description">{formatTime(date.start.seconds)}</span>
            </div>
            <div className="info">
                <span className="title">Artist</span>
                <span className="description">{artistStr}</span>
            </div>
            <div className="info">
                <span className="title">Programme Type</span>
                <span className="description">{programType.join(', ')}</span>
            </div>
            <div className="share">
                    <span className="sharing-link"
                          onClick={() => shareLink(title, description)}>
                        공유하기 &rarr;
                    </span>
            </div>
        </div>
    );
};

export default FeaturedEventInfo;
