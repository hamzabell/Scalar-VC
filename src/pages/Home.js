import React, { useEffect } from "react";
import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  Newsletter,
  Partners,
} from "../components/HomePage";
import { useImageContext } from "../context";

function HomePage(props) {
  const [imageStatus, setImageStatus] = useImageContext();

  useEffect(() => {
    return () => {
      setImageStatus("not-loaded");
    };
  }, []);

  return (
    <div className="mt-28">
      <SectionOne />
      <div className="mt-24 mb-10 flex justify-center text-2xl font-semibold">
        <h1 className="md:text-3xl">Why Scalar VC</h1>
      </div>
      <SectionTwo />
      <SectionThree />
      <div className="mt-16 mb-10 flex justify-center text-2xl font-semibold">
        <h1 className="md:text-3xl">What we offer</h1>
      </div>
      <SectionFour />
      <div className="mt-16 mb-6 flex justify-center text-xl font-semibold">
        <h1 className="md:text-3xl">Our Partner(s)</h1>
      </div>
      <Partners />
      <Newsletter />
    </div>
  );
}

export default HomePage;
