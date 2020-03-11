import React from "react";
import { Frame } from "framer";
import "./Main.scss";
import FeaturedEvent from "components/FeaturedEvent";
import GroupPerDay from "../../components/GroupPerDay/GroupPerDay";

function Main() {
    return (
        <div className="Main">
            <FeaturedEvent/>
            <div className="black-background">
                <div className="all-event-list">
                    <GroupPerDay/>
                    <GroupPerDay/>
                    <GroupPerDay/>
                    <GroupPerDay/>
                    <GroupPerDay/>
                    <GroupPerDay/>
                    <GroupPerDay/>
                    <GroupPerDay/>
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
