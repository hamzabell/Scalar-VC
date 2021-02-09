import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledButton = styled.button`
  background: #0a0e3a;
  color: #fdfdfd;
`;

function SectionOne(props) {
  const history = useHistory();

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-72 md:w-full text-2xl font-normal md:px-96 tracking-wider text-center">
          We believe the next $1B companies are among Student startups
          ecosystem. We are daring enough to believe in them,fund them and
          support them to success.
        </div>
        <div className="mt-8">
          <StyledButton
            className="w-44 h-16 text-xl"
            onClick={() => history.push("/joinus")}
          >
            Join Us
          </StyledButton>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
