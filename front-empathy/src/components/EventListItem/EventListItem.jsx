import React from 'react';
import './EventListItem.scss';

const EventListItem = ({ title, location, date }) => {
    return (
        <div className="EventListItem">
            <div className="event-title-time">
                <span className="title">{title}</span>
                <span className="time">{date.start.slice(-8)}</span>
            </div>
            <p className="location-info">{location}</p>
        </div>
    );
};

export default EventListItem;
