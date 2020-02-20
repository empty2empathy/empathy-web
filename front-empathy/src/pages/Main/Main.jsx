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
            autoplay: 0,
            controls: 0,
            modestbranding: 1,
            start: 30
        },
    };

    return (
        <>
            <h1>Main</h1>

            <YouTube
                videoId="bdneye4pzMw"
                opts={opts}
                onReady={_onReady}
            />

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

