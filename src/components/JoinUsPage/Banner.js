import React from "react";
import styled from "styled-components";
import { JoinUsBanner, JoinBannerLarge } from "../../assets";

const Container = styled.div`
  background-image: url(${JoinBannerLarge});
  background-size: cover;
  background-repeat: no-repeat;
  height: 38.3vh;
  width: 100%;

  @media screen and (max-width: 640px) {
    background-image: url(${JoinUsBanner});
  }
`;
const Mask = styled.div`
  background-color: rgba(10, 14, 58, 0.4);
  height: 38.3vh;
  /* @media screen and (max-width: 640px) {
    height: 28.3vh;
  } */
`;
function Banner(props) {
  return (
    <div>
      <div className="static">
        <Container className="w-screen">
          <Mask className="h-full flex justify-center items-center text-white font-bold text-3xl">
            Join us
          </Mask>
        </Container>
      </div>
    </div>
  );
}

export default Banner;
