import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #0a0e3a;
  color: #fdfdfd;
`;

function Newletter(props) {
  const [email, setEmail] = React.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <div className="flex flex-col items-center my-8  md:my-16 mx-6">
        <div className="text-lg  md:w-80 font-bold text-center">
          Be the first To know about the latest ideas from students startups
        </div>
        <form onSubmit={onSubmit} className="flex mt-4">
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-52 h-12 pl-2 bg-gray-200 md:w-96"
            placeholder="enter email address"
          />
          <StyledButton type="submit" className="w-32">
            Subscribe
          </StyledButton>
        </form>
      </div>
    </>
  );
}

export default Newletter;
