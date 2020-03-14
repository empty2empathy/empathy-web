import React from 'react';
import './EventListItem.scss';
import { Link } from "react-router-dom";

const EventListItem = ({ title, location, date, eventId }) => {
    return (
        <div className="EventListItem">
            <Link to={`/event/${eventId}`}>
                <div className="event-title-time">
                    <span className="title">{title}</span>
                    <span className="time">{date.start.slice(-8)}</span>
                </div>
                <p className="location-info">{location}</p>
            </Link>
        </div>
    );
};

export default EventListItem;
