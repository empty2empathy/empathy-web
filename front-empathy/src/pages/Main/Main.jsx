import React from "react";
import { Frame } from "framer";
import "./Main.scss";
import FeaturedEvent from "components/FeaturedEvent";
import GroupPerDay from "../../components/GroupPerDay/GroupPerDay";

function Main() {
    const events = [
        {
            date: '2020-03-12',
            eventList: [
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-12 17:24:50' },
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-12 17:24:50' },
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-12 17:24:50' },
                { title: 'title', time: '00:00', location: 'location', date: '2020-03-12 17:24:50' },
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
            <FeaturedEvent/>
            <div className="black-background">
                <div className="all-event-list">
                    {events.map((v, i) => <GroupPerDay key={i} {...v}/>)}
                </div>

                <Frame
                    initial={{ scale: 1 }}
                    animate={{ rotate: 360, scale: 2 }}
                    transition={{ duration: 1 }}
                    size={150}
                    background={"#f2f2f2"}
                    radius={150 / 2}
                    drag
                    opacity={0.5}
                />
            </div>
        </div>
    );
}

export default Main;
