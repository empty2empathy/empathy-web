import React from "react";
import styled from "styled-components";
import ArrowRight from "assets/svg/arrowRight";

function LinkTextButton({ label = "", onClick }) {
  return (
    <Button onClick={onClick}>
      <span>{label}</span>
      <ArrowRight width={16} height={16} color={"#fcfcfc"}></ArrowRight>
    </Button>
  )
}

const Button = styled.div`
    display: flex;
    justify-content: flex-end;
    background: black;

    span {
      font-size: 13px;
      color: #fcfcfc;
      margin: 0 4px 0;
    }
`;

export default LinkTextButton;
