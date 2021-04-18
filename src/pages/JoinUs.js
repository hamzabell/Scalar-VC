import React, { useEffect } from "react";
import { Banner, SectionOne, SectionTwo } from "../components/JoinUsPage";
import { useImageContext } from "../context";

function JoinPage(props) {
  const [imageStatus, setImageStatus] = useImageContext();

  useEffect(() => {
    setImageStatus("loaded");
    return () => {
      setImageStatus("not-loaded");
    };
  }, []);
  return (
    <div className="mt-16">
      <Banner />

      <div className="space-y-32 md:space-y-0 mt-20 flex flex-col md:flex-row md:justify-around items-center mx-10 mb-28">
        <SectionOne />
        <SectionTwo />
      </div>
    </div>
  );
}

export default JoinPage;
