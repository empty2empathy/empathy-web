import React, { useEffect, useState } from "react";
import FeaturedYoutube from "components/FeaturedYoutube";
import FeaturedEventInfo from "components/FeaturedEventInfo";
import FixedHeader from "components/FixedHeader";
import CtaButton from "components/CtaButton";
import DetailInfo from "components/DetailInfo";
import LottieTogglePlay from "components/LottieTogglePlay";
import { withFirebase } from "redbricks-firebase";
import { withRouter } from "react-router-dom";
import { openInsta, shareLink } from "utils";
import "./EventDetail.scss";

function EventDetail({ firebase, match: { params: { id } } }) {
    const [event, setEvent] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const event = await firebase.loadEvent(id);
            const artists$ = event.artists.map(({ path }) => {
                if (!path) return;
                return firebase.loadArtistWithPath(path);
            });
            const artists = await Promise.all(artists$);
            setEvent({ ...event, artists });
        };
        fetchData();
    }, [firebase, id]);

    const [isYoutubePlay, setIsYoutubePlay] = useState(false);
    const [youtubeRef, setYoutubeRef] = useState(null);

    function togglePlay() {
        if (youtubeRef) {
            isYoutubePlay ? youtubeRef.pauseVideo() : youtubeRef.playVideo();
        }
    }

    if (!event) return <div>Loading</div>;
    const { title, youtubeVideoId, description, location, artists } = event;
    return (
        <div className="EventDetail">
            <div className="movie-bg"/>
            <FixedHeader/>
            <FeaturedYoutube
                youtubeVideoId={youtubeVideoId}
                isYoutubePlay={isYoutubePlay}
                setIsYoutubePlay={setIsYoutubePlay}
                setYoutubeRef={setYoutubeRef}
                togglePlay={togglePlay}/>
            <div className="info-wrapper">
                <span className="event-location">{location.name}</span>
                <p className="event-title">
                    {title}
                </p>
                <button>
                    <LottieTogglePlay onClick={togglePlay}/>
                </button>
            </div>


            <div className="featured-event-info">
                <FeaturedEventInfo
                    featuredEvent={event}
                    ctaFunc={() => window.open(location.mapLink)}
                    ctaLabel="공연장소 위치 검색"/>
            </div>

            <div className="cta-button">
                <CtaButton label={`${title}`} onClick={() => shareLink(title, description)}/>
            </div>

            <p className="description">{description}</p>
            {artists.map(({ artistBio, instaId, name, img, programType }) => (
                <DetailInfo
                    key={name}
                    img={img}
                    title={name}
                    programType={programType}
                    description={artistBio}
                    ctaLabel="아티스트 인스타그램"
                    ctaFunc={() => openInsta(instaId)}
                />
            ))}

            <div className="location-info">
                <DetailInfo
                    img={location.img}
                    title={location.name}
                    programType={location.programType}
                    description={location.description}
                    ctaLabel="공연장소 인스타그램"
                    ctaFunc={() => openInsta(location.instaId)}
                />
            </div>
        </div>
    );
}

export default withRouter(withFirebase(EventDetail));
