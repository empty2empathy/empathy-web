import React, { useEffect, useState } from "react";
import "./EventDetail.scss";
import { withRouter } from "react-router-dom";
import FeaturedEventInfo from "components/FeaturedEventInfo";
import FeaturedYoutube from "components/FeaturedYoutube";
import { withFirebase } from "redbricks-firebase";
import FixedHeader from "components/FixedHeader";
import CtaButton from "components/CtaButton";
import LinkTextButton from "components/LinkTextButton";

function EventDetail({ firebase, match: { params: { id } } }) {
  const [event, setEvent] = useState(null);
  useEffect(() => {
    firebase.loadEvent(id).then(event => {
      setEvent(event);
    });
  }, [firebase, id]);

  const [isYoutubePlay, setIsYoutubePlay] = useState(false);
  const [youtubeRef, setYoutubeRef] = useState(null);

  function togglePlay() {
    if (youtubeRef) {
      isYoutubePlay ? youtubeRef.pauseVideo() : youtubeRef.playVideo();
    }
  }

  if (!event) return <div>Loading</div>;
  console.log(event)
  const { title, youtubeVideoId, description } = event;
  return (
    <div className="EventDetail">
      <FixedHeader />

      <div className="youtube">
        <FeaturedYoutube
          youtubeVideoId={youtubeVideoId}
          isYoutubePlay={isYoutubePlay}
          setIsYoutubePlay={setIsYoutubePlay}
          setYoutubeRef={setYoutubeRef}
          togglePlay={togglePlay}
        />
      </div>

      <div className="cta-button">
        {/*onClick시에 share함수 호출 해 주기 */}
        <CtaButton label={`${title} 공유하기`} />
      </div>

      <div className="featured-event-info">
        <FeaturedEventInfo featuredEvent={event} />
      </div>

      <LinkTextButton label="공연장소 위치 검색" />

      <p className="description">{description}</p>

      <div className="detail-info">
        <div className="top-info">
          <img alt="artist"></img>
          <div className="text-info">
            <p>Artist name</p>
            <p>Progrmme Type</p>
          </div>
        </div>
        <p className="description">
          Artist Bio De Amerikaanse indiepunkband Sleater-Kinney is terug met
          nieuwe muziek,
        </p>
      </div>

      <LinkTextButton label="아트스트 인스타그램" />

      <div className="detail-info">
        <div className="top-info">
          <img alt="location"></img>
          <div className="text-info">
            <p>Location</p>
            <p>Progrmme Type</p>
          </div>
        </div>
        <p className="description">
          Artist Bio De Amerikaanse indiepunkband Sleater-Kinney is terug met
          nieuwe muziek,
        </p>
      </div>

      <LinkTextButton label="공연 장소 인스타그램" />
    </div>
  );
}

export default withRouter(withFirebase(EventDetail));
