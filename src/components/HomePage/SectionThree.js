import React from "react";
import styled from "styled-components";
import { ImageTwo, ImageTwoLarge } from "../../assets";

const StyledDiv = styled.div`
  background: #0a0e3a;
  color: #ffffff;
`;
const StyledButton = styled.button`
  background: #11b583;
  border-radius: 5px;
  color: #ffffff;
`;
const ImageContainer = styled.div`
  object-fit: contain;
`;

function SectionThree(props) {
  return (
    <StyledDiv className="flex flex-col md:grid md:grid-cols-6 pt-12 md:pt-0 px-4 md:gap-12 md:pr-52 md:px-0">
      <ImageContainer className="md:col-span-4 md:flex md:justify-start">
        <img src={ImageTwo} alt="amebo women" className="m-0 md:hidden" />
        <img
          src={ImageTwoLarge}
          alt="computer teaching"
          className="m-0 hidden md:block"
        />
      </ImageContainer>
      <div className="md:col-span-2 mb-20 md:mt-32">
        <StyledButton className="text-lg w-32 h-10 text-white">
          For Investors
        </StyledButton>
        <div className="text-3xl font-extrabold space-x-3 mt-10  tracking-widest text-left ">
          We connect you
          <br /> to the next{" "}
          <span style={{ color: "#11b583" }}>
            big startups in the student
          </span>{" "}
          ecosystem.
        </div>
        <div className="mt-4">
          Get access to student startups ideas from around Africa, Vet them and
          invest in them
        </div>
      </div>
    </StyledDiv>
  );
}

export default SectionThree;
