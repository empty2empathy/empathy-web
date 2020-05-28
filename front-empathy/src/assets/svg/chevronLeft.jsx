import React from "react";

export default ({ width = 22, height = 22, color = 'white' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
    <path d="M 15 18 L 9 12 L 15 6" fill="transparent" strokeWidth="2" stroke={color}
          strokeMiterlimit="10"></path>
  </svg>
)

