import React, { useState } from "react";
import styled from "styled-components";
import { FaPaperPlane } from "react-icons/fa";

const StyledForm = styled.form`
  color: #0a0e3a;
`;

const StyledInput = styled.input`
  color: #fdfdfd;
  background: #0a0e3a;
  padding-left: 20px;
`;

const StyledButton = styled.button`
  color: #fdfdfd;
  background: #0a0e3a;
  display: flex;
  justify-content: center;
`;

const StyledSelect = styled.select`
  color: #fdfdfd;
  background: #0a0e3a;
  padding-left: 20px;
`;

const StyledTextArea = styled.textarea`
  background: #f1f1f3;
  color: #0a0e3a;
`;

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  who: "investor",
  message: "",
};
function ContactUsForm(props) {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <StyledForm
      onSubmit={handleSubmit}
      className="flex flex-col space-y-10 mb-14 w-full"
      autoComplete="off"
    >
      <label className="flex flex-col text-xl font-bold space-y-4">
        <h1 className=" text-xl font-bold">Name</h1>
        <StyledInput
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter your  full name"
          className="h-16  w-full rounded-3xl"
        />
      </label>
      <label className="flex flex-col space-y-4">
        <h1 className=" text-xl font-bold">Email</h1>
        <StyledInput
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter your email address"
          className="h-16 rounded-3xl w-full"
        />
      </label>
      <label className="flex flex-col space-y-4">
        <h1 className=" text-xl font-bold">Who are you?</h1>
        <StyledSelect
          name="who"
          value={formData.who}
          onChange={handleChange}
          className="h-16  w-full rounded-3xl"
        >
          <option value="investor">Investor</option>
          <option value="Startup">Startup</option>
        </StyledSelect>
      </label>

      <label className="flex flex-col space-y-4">
        <h1 className=" text-xl font-bold">Message</h1>
        <StyledTextArea
          onChange={handleChange}
          name="message"
          rows="8"
          placeholder="Write to us"
          className="pl-3 pt-2 w-full"
        ></StyledTextArea>
      </label>

      <StyledButton
        type="submit"
        className="text-2xl font-semibold py-6 w-full"
      >
        <FaPaperPlane className="mr-3" />
        Send Message
      </StyledButton>
    </StyledForm>
  );
}

export default ContactUsForm;
