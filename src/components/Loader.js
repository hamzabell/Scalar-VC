import React from "react";
import styled from "styled-components";
import { Logo } from "../assets";

const StyledBackground = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  background: #fdfdfd;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
`;

export default function Loader() {
  return (
    <StyledBackground>
      <div className="flex justify-center items-center h-full">
        <img src={Logo} />
      </div>
    </StyledBackground>
  );
}
