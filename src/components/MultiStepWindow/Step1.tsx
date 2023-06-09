import React from "react";
import TextField from "../UILiberary/Text-Field/TextField";
import EmailField from "../UILiberary/Email-Field/EmailField";

interface Step1Props {
  values: { [key: string]: string };
  errors: { [key: string]: string };
  handleInputChange?: (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const Step1: React.FC<Step1Props> = ({ values, errors, handleInputChange }) => {
  return (
    <div>
      <form>
        <div className="title">
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>

        <TextField
          label="Name"
          name="name"
          placeholder="e.g. Stephen King"
          onChange={handleInputChange}
          value={values.name}
          error={errors.name}
          errorMessagePosition="above"
        />
        <EmailField
          label="Email Address"
          email="email"
          placeholder="e.g. Stephenking@lorem.com"
          onChange={handleInputChange}
          value={values.email}
          error={errors.email}
          errorMessagePosition="above"
        />
        <TextField
          label="Phone Number"
          name="phone"
          placeholder="e.g. 1 234 567 890"
          onChange={handleInputChange}
          value={values.phone}
          error={errors.phone}
          errorMessagePosition="above"
        />
      </form>
    </div>
  );
};

export default Step1;
