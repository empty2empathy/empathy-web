import React from 'react';
import lottie from "lottie-web";
import * as animationData from '../assets/lottie/play-pause.json';


class LottieToggleIcon extends React.Component {
    componentDidMount() {
        const { animationData, rendererSettings = {} } = this.props;

        this.setState(
            {
                options: {
                    container: this.el,
                    renderer: "svg",
                    loop: false,
                    autoplay: false,
                    segments: true,
                    animationData,
                    rendererSettings
                },
                hasChanged: false
            },
            () => {
                this.anim = lottie.loadAnimation(this.state.options);
                this.playSegments();
            }
        );
    }

    getSegments(props = this.props) {
        const animationData = this.props.animationData;
        const {
            startFrame = animationData.ip,
            endFrame = animationData.op,
            direction
        } = props;
        const segments = [];
        const forward = direction > 0;

        if (this.state.hasChanged) {
            segments[0] = !forward ? startFrame : endFrame;
            segments[1] = !forward ? endFrame : startFrame;
        } else {
            segments[0] = forward ? startFrame + 1 : endFrame - 1;
            segments[1] = forward ? startFrame : endFrame;
        }

        return segments;
    }

    playSegments() {
        const segments = this.getSegments();
        this.anim.playSegments(segments, true);
    }

    componentDidUpdate(nextProps, nextState) {
        if (
            this.props.direction !== nextProps.direction ||
            this.props.startFrame !== nextProps.startFrame ||
            this.props.endFrame !== nextProps.endFrame
        ) {
            if (!this.state.hasChanged) {
                this.setState(
                    {
                        hasChanged: true
                    },
                    () => {
                        this.playSegments();
                    }
                );
            } else {
                this.playSegments();
            }
        }
    }

    render() {
        return <div ref={el => (this.el = el)}/>;
    }
}


export default class LottieTogglePlay extends React.Component {

    constructor() {
        super();
        this.state = {
            direction: -1
        };
    }

    toggleDirection = () => {
        const nextDirection = this.state.direction < 0 ? 1 : -1;
        this.setState({
            direction: nextDirection
        });
    };

    render() {
        const { onClick } = this.props;
        const { direction } = this.state;
        return (
            <div onClick={() => {
                this.toggleDirection();
                onClick();
            }}>
                <LottieToggleIcon
                    animationData={animationData.default}
                    direction={direction}
                />
            </div>
        );
    }
}
