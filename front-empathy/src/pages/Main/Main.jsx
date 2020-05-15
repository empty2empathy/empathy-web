import React, { useState, useEffect } from "react";
import "./Main.scss";
import FeaturedEvent from "components/FeaturedEvent";
import CircleItemSlider from "components/CircleItemSlider";
import GroupPerDay from "../../components/GroupPerDay/GroupPerDay";
import { mapEvents } from "utils";
import { withFirebase } from "redbricks-firebase";

function Main({ firebase }) {
  const [featuredEvent, setFeaturedEvent] = useState(null);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const events = await firebase.loadEvents();
      const parsedEvents$ = events.map(async event => {
        const location = await firebase.loadLocationWithPath(event.location.path);
        const artists$ = event.artists.map(({ path }) => firebase.loadArtistWithPath(path));
        const artists = await Promise.all(artists$);
        return { ...event, location, artists }
      });
      const parsedEvents = await Promise.all(parsedEvents$);
      setFeaturedEvent(parsedEvents[0]);
      setEvents(mapEvents(parsedEvents));
    };
    fetchData();
  }, [firebase]);

  return (
    <div className="Main">
      <div className="movie-bg"/>
      <FeaturedEvent featuredEvent={featuredEvent}/>
      <div>
        <CircleItemSlider/>
      </div>
      <div className="all-event-list">
        {events.map(event => <GroupPerDay key={event.date} {...event} />)}
      </div>
    </div>
  )
}

export default withFirebase(Main);
