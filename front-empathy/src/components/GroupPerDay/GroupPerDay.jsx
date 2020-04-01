import React from 'react';
import './GroupPerDay.scss';
import EventListItem from 'components/EventListItem';
import { MONTH, WEEK } from "utils";
import dayjs from 'dayjs';


const GroupPerDay = ({ date, eventList }) => {
    const _date = dayjs(date);
    const month = MONTH[_date.get('month')];
    const dayOfWeek = WEEK[_date.get('day')];
    const day = _date.get('date');

    return (
        <div className="GroupPerDay">
            <div className="date-information">
                <div className="sticky">
                    <p>{month} {day},</p>
                    <p>{dayOfWeek}</p>
                </div>
            </div>
            <div className="event-list-container">
                {eventList.map(v => <EventListItem key={v.id} eventId={v.id} {...v}/>)}
            </div>
        </div>
    );
};

export default GroupPerDay;
