import React, { useState, useEffect } from "react";
import "./Main.scss";
import FeaturedEvent from "components/FeaturedEvent";
import GroupPerDay from "../../components/GroupPerDay/GroupPerDay";
import { PERFORMANCE_DATA } from 'constants/domiData';
import { mapEvents } from "utils";
import { FirebaseContext } from '../../firebase';

function Main() {
    return (
        <FirebaseContext.Consumer>
            {firebase => <MainContainer firebase={firebase}/>}
        </FirebaseContext.Consumer>
    );
}

function MainContainer({ firebase }) {
    const [featuredEvent, setFeaturedEvent] = useState(null);
    useEffect(() => {
        firebase.loadEvents()


        setTimeout(() => {
            setFeaturedEvent(PERFORMANCE_DATA[0]);
        }, 1000);
    }, []);

    const [events, setEvents] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            // PERFORMANCE_DATA는 당일 기준으로 오름차순으로 sorting 되어 있어야 함.
            setEvents(mapEvents(PERFORMANCE_DATA));
        }, 1000)
    }, []);

    return (
        <div className="Main">
            <FeaturedEvent featuredEvent={featuredEvent}/>
            <div className="all-event-list">
                {events.map((event, i) => <GroupPerDay key={i} {...event}/>)}
            </div>
        </div>
    )
}

export default Main;
