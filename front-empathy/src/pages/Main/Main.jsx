import React, { useState, useEffect } from "react";
import "./Main.scss";
import FeaturedEvent from "components/FeaturedEvent";
import GroupPerDay from "../../components/GroupPerDay/GroupPerDay";
import { PERFORMANCE_DATA } from 'constants/domiData';
import { mapEvents } from "utils";

function Main() {

    const [featuredEvent, setFeaturedEvent] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            setFeaturedEvent(PERFORMANCE_DATA[0]);
        }, 1000);
    }, [featuredEvent]);

    const [events, setEvents] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            // PERFORMANCE_DATA는 당일 기준으로 오름차순으로 sorting 되어 있어야 함.
            setEvents(mapEvents(PERFORMANCE_DATA));
        }, 1000)
    }, [events]);

    return (
        <div className="Main">
            <FeaturedEvent featuredEvent={featuredEvent}/>
            <div className="all-event-list">
                {events.map((event, i) => <GroupPerDay key={i} {...event}/>)}
            </div>
        </div>
    );
}

export default Main;
