import React from "react";
import styled from "styled-components";
import { LogoLight, ScalarLarge } from "../assets";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  background-color: #0a0e3a !important;
`;

const StyledDiv = styled.div`
  background: #0a0e3a;
  color: #ffffff;
`;
const ImageContainer = styled.div`
  object-fit: cover;
`;

function Footer(props) {
  return (
    <StyledFooter className="px-6 text-white">
      <StyledDiv className="flex flex-col  justify-between px-4 pb-4 pt-12">
        <div className="flex md:flex-row-reverse flex-col  justify-between">
          <div className="flex flex-col md:flex-row md:justify-end w-full space-y-5 md:space-y-0 space-x-0 md:space-x-20">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Join Us</h2>

              <ul className="my-2 font-normal text-base">
                <li
                  className="cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/1DnKQdBaYrT1yrosqRWN-BNARoa_ISe5J3fN3TXnh4PE/viewform?edit_requested=true",
                      "_blank"
                    )
                  }
                >
                  Join us as an Investor
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">About Us</h2>
              <ul className="mt-2 mb-4 space-y-2 font-normal text-base">
                <li className="cursor-pointer">
                  <Link to="/about">Our team</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Contact Us</h2>
              <ul className="my-4 space-y-2 font-normal text-base">
                <li className="cursor-pointer">
                  <a href="mailto:hello@scalarvc.com">Hello@scalarvc.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <ImageContainer className="hidden md:block">
              <img src={ScalarLarge} alt="logo light" className="h-20" />
            </ImageContainer>
            <div className="flex space-x-4 text-white mb-3 mt-6">
              <FaLinkedin
                className="h-6 w-6 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/scalar-vc",
                    "_blank"
                  )
                }
              />
              <FaTwitter
                className="h-6 w-6 cursor-pointer"
                onClick={() =>
                  window.open("https://twitter.com/scalarvc?s=09", "_blank")
                }
              />
              <HiMail
                className="h-6 w-6 cursor-pointer"
                onClick={() =>
                  window.open("mailto:hello@scalarvc.com", "_blank")
                }
              />
            </div>
          </div>
        </div>

        <div className="md:hidden flex justify-center mb-1 mt-6">
          <img src={LogoLight} alt="logo light" />
          <span className="mt-4">We connect startups to investors</span>
        </div>
        <div className="w-full h-1 bg-white mt-4"></div>
        <div className="flex justify-center p-3">
          © Copyright 2021, Scalar VC
        </div>
      </StyledDiv>
    </StyledFooter>
  );
}

export default Footer;
