import React, { useEffect, useState } from "react";
import FeaturedYoutube from "components/FeaturedYoutube";
import FeaturedEventInfo from "components/FeaturedEventInfo";
import FixedHeader from "components/FixedHeader";
import CtaButton from "components/CtaButton";
import LinkTextButton from "components/LinkTextButton";
import DetailInfo from "components/DetailInfo";
import { withFirebase } from "redbricks-firebase";
import { withRouter } from "react-router-dom";
import { shareLink } from "utils";
import "./EventDetail.scss";
import Play from "assets/svg/play"

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
    const { title, youtubeVideoId, description, location, artists } = event;
    return (
        <div className="EventDetail">
            <div className="movie-bg" />
            <FixedHeader />
            <FeaturedYoutube
                youtubeVideoId={youtubeVideoId}
                isYoutubePlay={isYoutubePlay}
                setIsYoutubePlay={setIsYoutubePlay}
                setYoutubeRef={setYoutubeRef}
                togglePlay={togglePlay} />
            <div className="info-wrapper">
                <span className="event-location">{location.name}</span>
                <p className="event-title">
                    {title}
                </p>
                <button onClick={togglePlay}>
                    <Play
                        width={24}
                        height={24}
                        color={"white"}
                        style={{ padding: "6px" }}
                    />
                </button>
            </div>


            <div className="featured-event-info">
                <FeaturedEventInfo
                    featuredEvent={event}
                    ctaFunc={() => console.log('hi')}
                    ctaLabel="공연장소 위치 검색" />
            </div>

            <div className="cta-button">
                <CtaButton label={`${title}`} onClick={() => shareLink(title, description)} />
            </div>

            <p className="description">{description}</p>

            {artists.map(({ artistBio, instaId, name, img, programType }) => (
                <DetailInfo
                    img={img}
                    title={name}
                    programType={programType}
                    description={artistBio}
                    ctaLabel="아티스트 인스타그램"
                    ctaFunc={() => console.log(`insta id ${instaId}`)}
                />
            ))}

            <div className="detail-info">
                <div className="top-info">
                    <img alt="location"></img>
                    <div className="text-info">
                        <p>{location.name}</p>
                        <p>{location.programType.join(', ')}</p>
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
