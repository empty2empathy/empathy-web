import React from 'react';
import './GroupPerDay.scss';
import EventListItem from 'components/EventListItem';
import { MONTH, WEEK } from "utils";

const GroupPerDay = ({ date, eventList }) => {
    const _date = new Date(date);
    const month = MONTH[_date.getMonth()];
    const dayOfWeek = WEEK[_date.getDay()];
    const day = _date.getDate();
    return (
        <div className="GroupPerDay">
            <div className="date-information">
                <div className="sticky">
                    <p>{month} {day},</p>
                    <p>{dayOfWeek}</p>
                </div>
            </div>
            <div className="event-list-container">
                {eventList.map((v, i) => <EventListItem key={i} eventId={i} {...v}/>)}
            </div>
        </div>
    );
};

export default GroupPerDay;
