import React from 'react';
import './FeaturedEventInfo.scss';

const FeaturedEventInfo = () => {
    return (
        <div className="FeaturedEventInfo">
            <div className="info">
                <span className="title">Location</span>
                <span className="description">Location</span>
            </div>
            <div className="info">
                <span className="title">Start Performance</span>
                <span className="description">Fab,19 Wed 18:00</span>
            </div>
            <div className="info">
                <span className="title">Artist</span>
                <span className="description">Artist-array1, Artist-array2</span>
            </div>
        </div>
    )
};

export default FeaturedEventInfo;
