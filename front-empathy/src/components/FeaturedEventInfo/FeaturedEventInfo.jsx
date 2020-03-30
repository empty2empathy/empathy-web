import React from "react";
import "./FeaturedEventInfo.scss";
import { formatTime } from "utils";

const FeaturedEventInfo = ({ featuredEvent }) => {
    if (!featuredEvent) return null;
    const { location, date, artists, programType } = featuredEvent;
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
        </div>
    );
};

export default FeaturedEventInfo;
