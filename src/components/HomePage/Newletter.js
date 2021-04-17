import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";
import Airtable from "airtable";

const StyledButton = styled.button`
  background: #0a0e3a;
  color: #fdfdfd;
`;
const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY }).base(
  "appvtteBKlrR7dBnV"
);

function Newletter(props) {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const isValid = email !== "";
    if (isValid) {
      base("MailList").create(
        [
          {
            fields: {
              email: email,
            },
          },
        ],
        function (err, records) {
          if (err) {
            setIsLoading(false);
            toast.info("🚀 Hey it's not you,it's us.Please try that again!");
          }
          setIsLoading(false);
          toast.success("🚀 We will get in touch soon. Welcome to Scalar VC!");
          setEmail("");
        }
      );
    } else {
      toast.info("🚀 You are almost there! try that again.");
      setIsLoading(false);
    }
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
          <StyledButton
            type="submit"
            className="w-32 flex justify-center items-center space-x-3"
          >
            Subscribe
            {isLoading && (
              <Loader type="Oval" color="#ffffff" height={20} width={20} />
            )}
          </StyledButton>
        </form>
      </div>
    </>
  );
}

export default Newletter;
