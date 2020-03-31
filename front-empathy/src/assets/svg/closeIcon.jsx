import React from "react";
export default ({ width = 12, height = 12, color = "white", style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    style={{ ...style }}
  >
    <path
      d="M 18 6 L 6 18 M 6 6 L 18 18"
      fill="transparent"
      strokeWidth="2"
      stroke={color}
      strokeLinecap="square"
      strokeMiterlimit="10"
    ></path>
  </svg>
);
