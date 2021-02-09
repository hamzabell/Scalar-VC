import React from "react";
import styled from "styled-components";
import { FaMoneyBill, FaUsers } from "react-icons/fa";
import { Growth } from "../../assets";

const IconWrapper = styled.div`
  padding: 22px;
  border-radius: 99px;
  background: rgba(9, 13, 54, 0.05);
`;

function SectionFour(props) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:mx-32 md:my-16 justify-between items-center">
        <div className="flex flex-col items-center mb-10">
          <IconWrapper>
            <FaMoneyBill className="w-12 h-12" color="#0A0E3A" />
          </IconWrapper>
          <h1 className="mt-2 text-2xl ml-2 font-medium">Capital</h1>
          <div className="mt-3 text-center w-72 text-lg">
            With Scalar VC, you can forget about funding and focus on building.
          </div>
        </div>
        <div className="flex flex-col items-center mb-10">
          <IconWrapper>
            <img src={Growth} alt="growth" className="w-12 h-12" />
          </IconWrapper>
          <h1 className="mt-2 text-2xl ml-2 font-medium">Growth</h1>
          <div className="mt-3 text-center w-72 text-lg">
            The startup world can be crazy and volatile. We would provide you
            with the guidance to get started in the startup world
          </div>
        </div>
        <div className="flex flex-col items-center mb-10">
          <IconWrapper>
            <FaUsers className="w-12 h-12" color="#0A0E3A" />
          </IconWrapper>
          <h1 className="mt-2 text-2xl ml-2 font-medium">Community</h1>
          <div className="mt-3 text-center w-72 text-lg">
            You are not alone, you will join a community of builders who
            understands what it feels.
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionFour;
