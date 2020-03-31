import React from "react";
export default ({ width = 12, height = 12, color = "white", style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    style={{ ...style }}
  >
    <path
      d="M 4.167 10 L 15 10 M 10 4.167 L 15.833 10 L 10 15.833"
      fill="transparent"
      strokeWidth="2.22"
      stroke={color}
      strokeLinecap="square"
      strokeMiterlimit="10"
    ></path>
  </svg>
);
