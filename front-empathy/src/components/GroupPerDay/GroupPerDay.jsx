import React from 'react';
import './GroupPerDay.scss';
import EventListItem from 'components/EventListItem';

const GroupPerDay = () => {
    const eventList = [
        { title: 'title', time: '00:00', location: 'location' },
        { title: 'title', time: '00:00', location: 'location' },
        { title: 'title', time: '00:00', location: 'location' },
        { title: 'title', time: '00:00', location: 'location' },
        { title: 'title', time: '00:00', location: 'location' }
    ];
    return (
        <div className="GroupPerDay">
            <div className="date-information">
                <div className="sticky">
                    <p>Fab 17,</p>
                    <p>Mon</p>
                </div>
            </div>
            <div className="event-list-container">
                {eventList.map((v, i) => <EventListItem key={i} {...v}/>)}
            </div>
        </div>
    );
};

export default GroupPerDay;
