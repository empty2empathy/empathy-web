import React from 'react';
import './EventListItem.scss';

const EventListItem = () => {
    return (
        <div className="EventListItem">
            <div className="event-title-time">
                <span className="title">event-title</span>
                <span className="time">00:00</span>
            </div>
            <p className="location-info">location</p>
        </div>
    );
};

export default EventListItem;
