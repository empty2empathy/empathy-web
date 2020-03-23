import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CloseIcon from "assets/svg/closeIcon"


function FixedHeader() {
  return (
    <Header>
      <Link to="/">
        <CloseIcon
          width={24}
          height={24}
          color={"white"}
          style={{ padding: "10px" }}
        />
      </Link>
    </Header>)
}

const Header = styled.div`
    background-color: rgba(15, 15, 15, 0.3);
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
    width: 100vw;
    position: fixed;
    top: 0;
    height: 44px;
    z-index: 1;
    padding: 0 10px;
`;

export default FixedHeader;