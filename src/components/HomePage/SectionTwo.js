import React from "react";
import styled from "styled-components";
import { ImageOne, ImageOneLarge } from "../../assets";

const StyledDiv = styled.div`
  background: rgba(10, 14, 58, 0.05);
`;
const StyledButton = styled.button`
  background: #11b583;
  border-radius: 5px;
  color: #ffffff;
`;
const ImageContainer = styled.div`
  object-fit: contain;
`;
function SectionTwo(props) {
  return (
    <StyledDiv className="flex flex-col md:grid md:grid-cols-6  pt-12 md:pt-0 px-4 md:gap-12 md:pl-52 md:px-0">
      <div className="md:col-span-2 mt-24 md:mt-32">
        <StyledButton className="text-lg w-32 h-10 text-white">
          For Startups
        </StyledButton>
        <div className="text-3xl font-bold mt-10  tracking-widest text-left">
          Scalar VC <br className="md:hidden" />
          connects you to the best{" "}
          <span style={{ color: "#11b583" }}>funding opportunities</span> for
          your startup.
        </div>
        <div className="mt-4 md:mt-8">
          Scarlar has a vast network of investors of all kinds and will help you
          find the right investor for your startup
        </div>
      </div>
      <ImageContainer className="md:col-span-4 md:flex md:justify-end">
        <img src={ImageOne} alt="computer teaching" className="m-0 md:hidden" />
        <img
          src={ImageOneLarge}
          alt="computer teaching"
          className="m-0 hidden md:block"
        />
      </ImageContainer>
    </StyledDiv>
  );
}

export default SectionTwo;
