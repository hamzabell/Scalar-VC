import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #0a0e3a;
  color: #fdfdfd;
`;

function SectionTwo(props) {
  return (
    <div>
      <div className="text-xl font-medium md:w-96 md:-mt-4">
        Before Paystack blew up Ingressive Capital and a few took a chance on
        them. We believe that there are more Paystacks in the student startup
        ecosystem and we are willing to take a chance on them and guide them to
        success. Do not miss the chance to invest in the future.
      </div>
      <div className="mt-6">
        <StyledButton className="w-52 h-14 text-xl">Investors</StyledButton>
      </div>
    </div>
  );
}

export default SectionTwo;
