import React from "react";
import styled from "styled-components";
import ArrowRight from "assets/svg/arrowRight";

const CtaButton = ({ label = "" }) => {
  return (
    <Button>
      <span>{label}</span>
      <ArrowRight width={20} height={20} color={"#0f0f0f"} />
    </Button>
  );
};

const Button = styled.button`
  font-size: 16px;
  color: #0f0f0f;
  font-weight: 600;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 12px 16px;
  background: #fcfcfc;
  box-shadow: 0px 24px 36px 0px rgba(80, 80, 80, 0.12);
`;

export default CtaButton;
