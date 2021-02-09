import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #0a0e3a;
  color: #fdfdfd;
`;

function SectionOne(props) {
  const openLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div>
      <div className="text-xl font-medium md:w-96 ">
        We are not like the regular VC firm who just gives you money and advice.
        Instead we help you grow by connecting you to all the factors needed to
        scale like Legal services, incubators.
        <br />
        <br />
        We are with you all through the ride.
      </div>
      <div className="mt-6">
        <StyledButton
          className="w-52 h-14 text-xl"
          onClick={() =>
            openLink(
              "https://docs.google.com/forms/d/1IVRGs8NFvmrWjI067SOgHQQlonDHSdCnVcj5DGuhUOk/viewform?edit_requested=true"
            )
          }
        >
          Startups
        </StyledButton>
      </div>
    </div>
  );
}

export default SectionOne;
