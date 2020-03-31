import React from "react";
export default ({ width = 30, height = 30, color = "black", style }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    style={{ ...style }}>

    <path d="M8 5v14l11-7z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);
