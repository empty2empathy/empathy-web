import React from 'react';
import './FeaturedEventInfo.scss';

const FeaturedEventInfo = ({ featuredEvent }) => {
    if (!featuredEvent) return null;
    const { location, date, artists } = featuredEvent
    const artistStr = artists.map(v => v.name).join(', ');
    return (
        <div className="FeaturedEventInfo">
            <div className="info">
                <span className="title">Location</span>
                <span className="description">{location}</span>
            </div>
            <div className="info">
                <span className="title">Start Performance</span>
                {/*<span className="description">Fab,19 Wed 18:00</span>*/}
                <span className="description">{date.start.seconds}</span>
            </div>
            <div className="info">
                <span className="title">Artist</span>
                <span className="description">{artistStr}</span>
            </div>
        </div>
    )
};

export default FeaturedEventInfo;
