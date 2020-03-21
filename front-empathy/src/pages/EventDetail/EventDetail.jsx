import React from "react";
import "./EventDetail.scss";
import { Link } from "react-router-dom";
import StarIcon from "assets/svg/starIcon";

function EventDetail() {
  return (
    <>
      <div className="fixed-header">
        <Link to={`/`}>
          <StarIcon></StarIcon>
        </Link>
      </div>
    </>
  );
}

export default EventDetail;
