import React from "react";
import styled from "styled-components";
import { ProfileCard } from "../components/AboutUsPage";
import { useHistory } from "react-router-dom";

const StyledButton = styled.button`
  background: #0a0e3a;
  color: #fdfdfd;
`;

function AboutUs(props) {
  const history = useHistory();
  return (
    <div className="mt-28 mb-10">
      <h1 className="text-3xl font-bold text-center">About Scalar VC</h1>
      <div className="text-center text-xl mx-4 md:mx-0 md:px-96 mt-6 mb-14 ">
        Scalar VC is a platform that connects student startups and ideas to the
        right funding and opportunities in the space.
        <br />
        <br />
        Our mission is to work with early stage student ideas through product
        idea validation, funding, advisory, access to incubators and also
        coaching.
      </div>
      <h1 className="text-3xl font-bold text-center mt-12">Our Team</h1>
      <div className="mt-4">
        <div className="md:grid md:grid-cols-2 md:gap-16 md:px-44 flex flex-col">
          <ProfileCard
            partnerName="blessing"
            name="Blessing Emah"
            role="Founder / Product Manager"
            linkedIn="https://www.linkedin.com/in/blessingemah"
            twitter="https://twitter.com/Theblessingemah"
            description="A product manager skilled with creating user-centric products that  aligns with the business goals of the company. She is also a Utiva Product School Alumni skilled in building Great Products and  Teams."
          />
          <ProfileCard
            partnerName="emeka"
            name="Ehinze Emeka"
            role="Founder / Product Manager"
            linkedIn="https://www.linkedin.com/in/emeka-ehinze-the-black-tiger-b1183bb0"
            twitter="https://twitter.com/EhinzeEmeka?s=09"
            description="Emeka is an ex  Product Leader and lead faculty at Eko Innovation Center with expertise in Product management and advocacy for product managers within Africa."
          />
        </div>

        <div className="md:grid md:grid-cols-3 md:gap-16 flex flex-col mt-16">
          <ProfileCard
            partnerName="korede"
            name="Adeyemi Adekorede"
            role="Full stack developer"
            linkedIn="https://www.linkedin.com/in/adeyemi-adekorede/"
            twitter="https://twitter.com/AdeyemiAdekore2"
            description="Electronics engineer solving problems with code.. Has several years of experience helping startups around the world scale their business with technology."
          />
          <ProfileCard
            partnerName="akan"
            name="Akan Bassey"
            role="Full stack developer"
            linkedIn="https://www.linkedin.com/in/akan-bassey-708941171"
            description="Full stack Web developer  and self taught  machine  learning engineer with a passion for technology  and innovation."
          />
          <ProfileCard
            partnerName="samuel"
            name="Moses Samuel"
            role="Product designer "
            linkedIn="https://www.linkedin.com/in/moses-samuel-oluwasegun/"
            twitter="https://twitter.com/SamuelAPEX"
            description="A Product designer with a focus on user experience, designing and building user centered products that also align with business goals."
          />
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <StyledButton
          className="w-52 h-14 text-xl"
          onClick={() => history.push("/joinus")}
        >
          Join Us
        </StyledButton>
      </div>
    </div>
  );
}

export default AboutUs;
