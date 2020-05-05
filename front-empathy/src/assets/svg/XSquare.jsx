import React from 'react';

export default ({ width = 22, height = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
    <path
      d="M 4.583 19.25 C 3.571 19.25 2.75 18.429 2.75 17.417 L 2.75 4.583 C 2.75 3.571 3.571 2.75 4.583 2.75 L 17.417 2.75 C 18.429 2.75 19.25 3.571 19.25 4.583 L 19.25 17.417 C 19.25 18.429 18.429 19.25 17.417 19.25 Z"
      fill="transparent" strokeWidth="1.5" stroke="rgb(26, 26, 26)" strokeLinecap="round"
      strokeLinejoin="round"/>
    <path d="M 8.25 8.25 L 13.75 13.75 M 13.75 8.25 L 8.25 13.75" fill="transparent" strokeWidth="1.5"
          stroke="rgb(26, 26, 26)" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
