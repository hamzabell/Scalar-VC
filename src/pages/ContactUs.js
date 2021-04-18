import React, { useEffect } from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import styled from "styled-components";
import { CntactUs } from "../assets";
import { ContactUsForm } from "../components/ContactUsPage";
import { useImageContext } from "../context";

const ContactusWrapper = styled.div`
  color: #0a0e3a;
`;

function ContactUs(props) {
  const [imageStatus, setImageStatus] = useImageContext();

  useEffect(() => {
    return () => {
      setImageStatus("not-loaded");
    };
  }, []);
  return (
    <ContactusWrapper className="mt-28">
      <div className="flex flex-col">
        <div className="flex flex-col space-y-4 mb-32">
          <div className="text-3xl font-bold text-center">Contact us</div>
          <div className="flex justify-center space-x-8 text-white mb-3 mt-6">
            <FaLinkedin
              className="h-6 w-6 cursor-pointer"
              color="#0A0E3A"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/scalar-vc",
                  "_blank"
                )
              }
            />
            <FaTwitter
              className="h-6 w-6 cursor-pointer"
              color="#0A0E3A"
              onClick={() =>
                window.open("https://twitter.com/scalarvc?s=09", "_blank")
              }
            />
            <HiMail
              className="h-6 w-6 cursor-pointer"
              color="#0A0E3A"
              onClick={() => window.open("mailto:hello@scalarvc.com", "_blank")}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row mx-6">
          <div className="flex flex-col mb-14 items-center md:justify-center  w-full">
            <img
              src={CntactUs}
              alt="contact"
              onLoad={() => setImageStatus("loaded")}
            />
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
