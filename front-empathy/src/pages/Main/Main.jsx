import React, { useState, useEffect } from "react";
import "./Main.scss";
import FeaturedEvent from "components/FeaturedEvent";
import GroupPerDay from "../../components/GroupPerDay/GroupPerDay";
import { PERFORMANCE_DATA } from 'constants/domiData';

function Main() {

    const [featuredEvent, setFeaturedEvent] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setFeaturedEvent(PERFORMANCE_DATA[0]);
        }, 1000);
    }, [featuredEvent]);

    const events = [
        {
            date: '2020-03-12',
            eventList: [
                {
                    title: 'GHETTO-RAY with Ahadadream',
                    time: '00:00',
                    location: '이태원 / soap seoul',
                    date: '2020-03-12 17:24:50'
                },
                { title: '김희나 Quartet', time: '00:00', location: 'Bartican(잠실 석촌호수)', date: '2020-03-12 17:24:50' },
                {
                    title: 'GHETTO-RAY with Ahadadream',
                    time: '00:00',
                    location: 'location',
                    date: '2020-03-12 17:24:50'
                },
                {
                    title: 'GHETTO-RAY with Ahadadream',
                    time: '00:00',
                    location: 'location',
                    date: '2020-03-12 17:24:50'
                },
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-12 17:24:50' },
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-12 17:24:50' },
            ]
        },
        {
            date: '2020-03-13',
            eventList: [
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-13 17:24:50' },
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-13 17:24:50' },
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-13 17:24:50' }
            ]
        },
        {
            date: '2020-03-14',
            eventList: [
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-14 17:24:50' },
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-14 17:24:50' },
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-14 17:24:50' },
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-14 17:24:50' },
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-14 17:24:50' },
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-14 17:24:50' },
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-14 17:24:50' },
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-14 17:24:50' },
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-14 17:24:50' },
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-14 17:24:50' },
            ]
        }
    ];
    return (
        <div className="Main">
            <FeaturedEvent featuredEvent={featuredEvent}/>
            <div className="all-event-list">
                {events.map((v, i) => <GroupPerDay key={i} {...v}/>)}
            </div>
        </div>
    );
}

export default Main;
