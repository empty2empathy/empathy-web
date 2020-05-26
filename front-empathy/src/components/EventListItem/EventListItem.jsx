import React from 'react';
import './EventListItem.scss';
import { Link } from "react-router-dom";
import { formatTime } from "utils";

const EventListItem = ({ title, location, startAt, eventId }) => {
    const time = formatTime(startAt);

    return (
        <div className="EventListItem">
            <Link to={`/event/${eventId}`}>
                <div className="event-title-time">
                    <span className="title">{title}</span>
                    <span className="time">{time}</span>
                </div>
                <p className="location-info">{location.name}</p>
            </Link>
        </div>
    );
};

export default EventListItem;
