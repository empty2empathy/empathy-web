import React from 'react';
import './EventListItem.scss';
import { Link } from "react-router-dom";
import { formatTime } from "utils";

const EventListItem = ({ title, location, date, eventId }) => {
    const time = formatTime(date.start.seconds);

    return (
        <div className="EventListItem">
            <Link to={`/event/${eventId}`}>
                <div className="event-title-time">
                    <span className="title">{title}</span>
                    <span className="time">{time}</span>
                </div>
                <p className="location-info">{location}</p>
            </Link>
        </div>
    );
};

export default EventListItem;
