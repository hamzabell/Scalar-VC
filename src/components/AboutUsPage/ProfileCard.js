import React from "react";
import styled from "styled-components";
import { Blessing, Emeka, Korede, Akan, Samuel } from "../../assets";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const StyledTitle = styled.div`
  color: #11b583;
`;

const StyledImageContainer = styled.div`
  border: 2px solid #11b583;
  object-fit: cover;
`;

const partnerGuests = {
  blessing: Blessing,
  emeka: Emeka,
  korede: Korede,
  akan: Akan,
  samuel: Samuel,
};

function ProfileCard({
  name,
  role,
  description,
  partnerName,
  twitter,
  linkedIn,
}) {
  const vistSocialLink = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="px-8 mt-10">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-center">
          <StyledImageContainer className="rounded-full pt-4 px-2 flex justify-end items-center">
            <img
              src={partnerGuests[partnerName]}
              alt="partner"
              className="w-44 h-44"
            />
          </StyledImageContainer>
        </div>
        <div className="flex flex-col space-y-1 text-center mt-6">
          <div className="text-2xl font-semibold">{name}</div>
          <StyledTitle>{role}</StyledTitle>
        </div>
        <div className="text-lg -mt-14 md:px-10">
          <p className="">{description}</p>
        </div>
        <div className="mt-4 flex space-x-2 px-10">
          <div
            className="flex space-x-3 cursor-pointer"
            onClick={() => vistSocialLink(twitter)}
          >
            <FaTwitter color="#0077B7" className="mt-1" />
            <p>Twitter</p>
          </div>
          <div>|</div>
          <div
            className="flex  space-x-3 cursor-pointer"
            onClick={() => vistSocialLink(linkedIn)}
          >
            <FaLinkedin color="#0077B7" className="mt-1" />
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
