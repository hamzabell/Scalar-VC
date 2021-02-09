import React from "react";
import styled from "styled-components";
import { Logo } from "../assets";
import { FaBars } from "react-icons/fa";
import { useMenuContext } from "../context";
import { Link, useHistory } from "react-router-dom";
const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: #ffffff;
  top: 0;
  left: 0;
`;

const StyledImageContainer = styled.div`
  object-fit: contain;
`;

const StyledFaBars = styled(FaBars)`
  color: #1d2150;
`;

const StyledButton = styled.button`
  color: #fdfdfd;
  background: #0a0e3a;
`;

function Header(props) {
  const history = useHistory();
  const [isMenuOpen, setIsMenuOpen] = useMenuContext();
  return (
    <StyledHeader className="flex justify-between  p-4 shadow-xs">
      <StyledImageContainer>
        <img src={Logo} alt="scalar logo" className="w-10  h-10" />
      </StyledImageContainer>
      <div>
        <ul className="md:flex hidden space-x-10 mr-20">
          <li className="mt-2 text-lg cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="mt-2 text-lg cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <StyledButton
              className="px-8 h-10 w-full"
              onClick={() => history.push("/joinus")}
            >
              Join Us
            </StyledButton>
          </li>
          <li className="mt-2 text-lg cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <StyledFaBars
          className="w-6 h-6 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
    </StyledHeader>
  );
}

export default Header;
