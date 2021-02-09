import React from "react";
import styled from "styled-components";
import { CancelIcon } from "../assets";
import { Link, useLocation } from "react-router-dom";
import { useMenuContext } from "../context";

const StyledBackground = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  background: #fdfdfd;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const StyledDiv = styled.div`
  object-fit: contain;
`;

const StyledUL = styled.ul`
  color: #0a0e3a;
`;

const PATHS = ["/", "/joinus", "/contact", "/about"];

const pathStyles = {
  active: ["font-bold"],
  inactive: ["font-normal"],
};

function MobileMenu(props) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useMenuContext();

  const isLinkActive = (pathIndex) => {
    return location.pathname === PATHS[pathIndex]
      ? pathStyles.active
      : pathStyles.inactive;
  };

  const closeMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <StyledBackground>
      <div className="flex flex-row-reverse pt-10 px-8">
        <StyledDiv onClick={closeMenu}>
          <img src={CancelIcon} alt="cancel icon" />
        </StyledDiv>
      </div>
      <div className="flex flex-col  items-center mt-40 w-full h-full">
        <StyledUL className="space-y-6 text-3xl font-normal">
          <li onClick={closeMenu}>
            <Link to="/" className={isLinkActive(0)}>
              Home
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/joinus" className={isLinkActive(1)}>
              Join Us
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/about" className={isLinkActive(3)}>
              About Scalar
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/contact" className={isLinkActive(2)}>
              Contact
            </Link>
          </li>
        </StyledUL>
      </div>
    </StyledBackground>
  );
}

export default MobileMenu;
