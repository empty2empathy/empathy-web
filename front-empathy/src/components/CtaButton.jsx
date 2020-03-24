import React from "react";
import styled from "styled-components";
import ArrowRight from "assets/svg/arrowRight";

const CtaButton = ({ label = "" }) => {
  return (
    <Button>
      <Label>{label}</Label>
      <ActionLabel>
        공유하기
      </ActionLabel>
      <ArrowRight width={20} height={20} color={"#0f0f0f"} />
    </Button>
  );
};

const Label = styled.span`
  max-width: 55%;
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow: hidden;
  text-align: left;
  font-weight: 800;
  color: #fff;
  text-shadow: -1px -1px 0 black,
            1px -1px 0 black, -1px 1px 0 black,
            1px 1px 0 black;
        
`

const ActionLabel = styled.span`
  flex: 1;
  text-align: left;
`

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
  outline: none;
  border: none;
`;

export default CtaButton;
