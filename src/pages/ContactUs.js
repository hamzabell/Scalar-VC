import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import styled from "styled-components";
import { CntactUs } from "../assets";
import { ContactUsForm } from "../components/ContactUsPage";

const ContactusWrapper = styled.div`
  color: #0a0e3a;
`;

function ContactUs(props) {
  return (
    <ContactusWrapper className="mt-28">
      <div className="flex flex-col">
        <div className="flex flex-col space-y-4 mb-32">
          <div className="text-3xl font-bold text-center">Contact us</div>
          <div className="flex justify-center space-x-8 text-white mb-3 mt-6">
            <FaLinkedin className="h-6 w-6" color="#0A0E3A" />
            <FaTwitter className="h-6 w-6" color="#0A0E3A" />
            <HiMail className="h-6 w-6" color="#0A0E3A" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row mx-6">
          <div className="flex flex-col mb-14 items-center md:justify-center  w-full">
            <img src={CntactUs} alt="contact" />
            <div className="text-3xl font-bold mt-8 md:w-64 w-full text-center ">
              Have a question? Get in touch
            </div>
          </div>

          <ContactUsForm />
        </div>
      </div>
    </ContactusWrapper>
  );
}

export default ContactUs;
