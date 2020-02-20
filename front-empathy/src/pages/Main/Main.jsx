import React from 'react';
import YouTube from 'react-youtube';
import { Frame } from "framer";
import './Main.scss';

function Main() {

    const _onReady = event => {
        // access to player in all event handlers via event.target
        event.target.playVideo();
    };

    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            // controls: 0,
            // modestbranding: 1,
            start: 30
        },
    };

    return (
        <>
            <iframe src="https://player.vimeo.com/video/76979871?autoplay=1&loop=1&autopause=0" width="640" height="360"
                    frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            <YouTube
                videoId="bdneye4pzMw"
                opts={opts}
                onReady={_onReady}
            />
            <h1>Service title</h1>
            <p>description description description description description description</p>

            <div class="performance-info-container">
                <div>
                    <div>Fab 17, Mon</div>
                    <div class="item">
                        <h4>Event title</h4>
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
        </>
    );
}

export default Main;

