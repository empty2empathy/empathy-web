import React, { useState, useEffect } from "react";
import "./Main.scss";
import FeaturedEvent from "components/FeaturedEvent";
import GroupPerDay from "../../components/GroupPerDay/GroupPerDay";
import { mapEvents } from "utils";
import { withFirebase } from "redbricks-firebase";

function Main({ firebase }) {
    const [featuredEvent, setFeaturedEvent] = useState(null);
    const [events, setEvents] = useState([]);
    useEffect(() => {
        firebase.loadEvents().then(events => {
            setFeaturedEvent(events[0]);
            setEvents(mapEvents(events));
        })
    }, [firebase]);

    return (
        <div className="Main">
            <div className="movie-bg"></div>
            <FeaturedEvent featuredEvent={featuredEvent} />
            <div className="all-event-list">
                {events.map((event, i) => <GroupPerDay key={i} {...event} />)}
            </div>
        </div>
    )
}

export default withFirebase(Main);
