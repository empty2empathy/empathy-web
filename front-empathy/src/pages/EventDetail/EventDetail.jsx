import React, { useEffect, useState } from "react";
import "./EventDetail.scss";
import { Link, withRouter } from "react-router-dom";
import CloseIcon from "assets/svg/closeIcon";
import ArrowRight from "assets/svg/arrowRight";
import YouTube from "react-youtube";
import FeaturedEventInfo from "components/FeaturedEventInfo";
import { withFirebase } from "redbricks-firebase";


function EventDetail({ firebase, match: { params: { id } } }) {
    const [event, setEvent] = useState(null);
    useEffect(() => {
        firebase.loadEvent(id).then(event => {
            setEvent(event);
        })
    }, [firebase]);

    return (
        <div className="EventDetail">
            <div className="fixed-header">
                <Link to="/">
                    <CloseIcon
                        width={24}
                        height={24}
                        color={"white"}
                        style={{ padding: "10px" }}/>
                </Link>
            </div>

            <div className="youtube">
                <YouTube videoId="kT-EK_G0guA"/>
            </div>

            <div className="cta-button">
                <button>
                    <span>'eventTitle'공유하기</span>
                    <ArrowRight width={20} height={20} color={"#0f0f0f"}/>
                </button>
            </div>

            <div className="featured-event-info">
                <FeaturedEventInfo
                    featuredEvent={{
                        location: "에반스라운지",
                        date: {
                            end: { seconds: 1581678000, nanoseconds: 0 },
                            start: { seconds: 1581678000, nanoseconds: 0 }
                        },
                        artists: [
                            { artistBio: "''", instaId: "''", name: "로쿠" },
                            { artistBio: "''", instaId: "''", name: "KYUL" }
                        ]
                    }}
                />
            </div>

            <div className="link-text-button">
                <span>공연장소 위치 검색</span>
                <ArrowRight width={16} height={16} color={"#fcfcfc"}></ArrowRight>
            </div>

            <p className="description">
                De Amerikaanse indiepunkband Sleater-Kinney is terug met nieuwe muziek,
                vier jaar na de release van het meest recente album ‘No Cities to Love’.
                Het riot grrrl-trio kwam op in de jaren negentig, maar klinkt juist nu
                grootser en gedurfder dan ooit tevoren.
            </p>

            <div className="detail-info">
                <div className="top-info">
                    <img></img>
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

            <div className="link-text-button">
                <span>아트스트 인스타그램</span>
                <ArrowRight width={16} height={16} color={"#fcfcfc"}></ArrowRight>
            </div>

            <div className="detail-info">
                <div className="top-info">
                    <img></img>
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

            <div className="link-text-button">
                <span>공연 장소 인스타그램</span>
                <ArrowRight width={16} height={16} color={"#fcfcfc"}></ArrowRight>
            </div>
        </div>
    );
}

export default withRouter(withFirebase(EventDetail));
