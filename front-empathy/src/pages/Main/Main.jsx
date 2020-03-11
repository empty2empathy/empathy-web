import React from "react";
import { Frame } from "framer";
import "./Main.scss";
import FeaturedEvent from "components/FeaturedEvent";

function Main() {
    return (
        <div className="Main">
            <FeaturedEvent/>
            <div class="black-background">
                <div className="featured-event-info">
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
                    initial={{ scale: 1 }}
                    animate={{ rotate: 360, scale: 2 }}
                    transition={{ duration: 1 }}
                    size={150}
                    background={"#f2f2f2"}
                    radius={150 / 2}
                    drag
                    opacity={0.5}
                />
            </div>
        </div>
    );
}

export default Main;
