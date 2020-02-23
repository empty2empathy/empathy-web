import React from "react";
import YouTube from "react-youtube";
import { Frame } from "framer";
import "./Main.scss";

function Main() {
  let youtubeRef;

  const _onReady = event => {
    // access to player in all event handlers via event.target
    youtubeRef = event.target;
  };

  const opts = {
    // height: '390',
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      start: 30
    }
  };

  return (
    <div className="Main">
      <div
        className="video-overlay"
        onClick={() => {
          youtubeRef.playVideo();
        }}
      ></div>
      <div className="youtube">
        <YouTube
          className="youtube"
          videoId="QrR_gm6RqCo"
          opts={opts}
          onReady={_onReady}
        />
        {/* <iframe
          width="792"
          height="446"
          src="https://www.youtube.com/embed/QrR_gm6RqCo"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-pyicture"
          allowfullscreen
        ></iframe> */}
      </div>

      <div className="featured-event-info">
        <div className="event-title">
          <span className="title">Event Title</span>
          <span className="now">Now</span>
        </div>

        <div className="performance-info">
          <div className="info">
            <span className="title">Location</span>
            <span className="description">Location</span>
          </div>
          <div className="info">
            <span className="title">Start Performance</span>
            <span className="description">Fab,19 Wed 18:00</span>
          </div>
          <div className="info">
            <span className="title">Artist</span>
            <span className="description">Artist-array1, Artist-array2</span>
          </div>
        </div>

        <div className="insta-share">
          <a className="sharing-link">인스타그램 공유하기 &rarr;</a>
        </div>

        <div className="group-per-day">
          <div className="date-information">
            <div className="sticky">
              <p>Fab 17,</p>
              <p>Mon</p>
            </div>
          </div>
          <div className="event-list-container">
            <div className="event-list-item">
              <div className="event-title-time">
                <span className="title">event-title</span>
                <span className="time">00:00</span>
              </div>
              <p className="location-info">location</p>
            </div>
            <div className="event-list-item">
              <div className="event-title-time">
                <span className="title">event-title</span>
                <span className="time">00:00</span>
              </div>
              <p className="location-info">location</p>
            </div>
            <div className="event-list-item">
              <div className="event-title-time">
                <span className="title">event-title</span>
                <span className="time">00:00</span>
              </div>
              <p className="location-info">location</p>
            </div>
            <div className="event-list-item">
              <div className="event-title-time">
                <span className="title">event-title</span>
                <span className="time">00:00</span>
              </div>
              <p className="location-info">location</p>
            </div>
            <div className="event-list-item">
              <div className="event-title-time">
                <span className="title">event-title</span>
                <span className="time">00:00</span>
              </div>
              <p className="location-info">location</p>
            </div>
            <div className="event-list-item">
              <div className="event-title-time">
                <span className="title">event-title</span>
                <span className="time">00:00</span>
              </div>
              <p className="location-info">location</p>
            </div>
            <div className="event-list-item">
              <div className="event-title-time">
                <span className="title">event-title</span>
                <span className="time">00:00</span>
              </div>
              <p className="location-info">location</p>
            </div>
            <div className="event-list-item">
              <div className="event-title-time">
                <span className="title">event-title</span>
                <span className="time">00:00</span>
              </div>
              <p className="location-info">location</p>
            </div>
          </div>
        </div>
        <div className="group-per-day">
          <div className="date-information">
            <div className="sticky">
              <p>Fab 18,</p>
              <p>Tue</p>
            </div>
          </div>
          <div className="event-list-container">
            <div className="event-list-item">
              <div className="event-title-time">
                <span className="title">event-title</span>
                <span className="time">00:00</span>
              </div>
              <p className="location-info">location</p>
            </div>

            <div className="event-list-item">
              <div className="event-title-time">
                <span className="title">event-title</span>
                <span className="time">00:00</span>
              </div>
              <p className="location-info">location</p>
            </div>
            <div className="event-list-item">
              <div className="event-title-time">
                <span className="title">event-title</span>
                <span className="time">00:00</span>
              </div>
              <p className="location-info">location</p>
            </div>
            <div className="event-list-item">
              <div className="event-title-time">
                <span className="title">event-title</span>
                <span className="time">00:00</span>
              </div>
              <p className="location-info">location</p>
            </div>
            <div className="event-list-item">
              <div className="event-title-time">
                <span className="title">event-title</span>
                <span className="time">00:00</span>
              </div>
              <p className="location-info">location</p>
            </div>
            <div className="event-list-item">
              <div className="event-title-time">
                <span className="title">event-title</span>
                <span className="time">00:00</span>
              </div>
              <p className="location-info">location</p>
            </div>
            <div className="event-list-item">
              <div className="event-title-time">
                <span className="title">event-title</span>
                <span className="time">00:00</span>
              </div>
              <p className="location-info">location</p>
            </div>
            <div className="event-list-item">
              <div className="event-title-time">
                <span className="title">event-title</span>
                <span className="time">00:00</span>
              </div>
              <p className="location-info">location</p>
            </div>
          </div>
        </div>
      </div>

      <Frame
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
        size={150}
        background={"#f2f2f2"}
        radius={30}
      />
    </div>
  );
}

export default Main;
