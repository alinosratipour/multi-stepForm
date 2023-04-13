import React from "react";
import CustomButton from "../Button/NewButton";
import EmailField from "../Email-Field/EmailField";
import TextField from "../Text-Field/TextField";
import "./MultiStepWindow.scss";

const MultiStepWindow = () => {
  const ref = React.useRef<HTMLButtonElement>(null);
  return (
    <div className="container">
      <div className="form-wraper">
        <div className="form-content-wrapper">
          <div className="form-content">
            <div className="form-left-side">gghgh</div>
            <div className="form-right-side">
              <div className="form-header">
                <h1>Personal Info</h1>
                <p>
                  Please provide your name, email address, and phone number.
                </p>
              </div>
              <div className="form-text-fields-container">
                <TextField
                  label="Name"
                  name="name"
                  placeholder="e.g. Stephen King"
                />
                <EmailField
                  label="Email"
                  email="email"
                  placeholder="e.g. Stephenking@lorem.com"
                />
                <TextField
                  label="Phone Number"
                  name="name"
                  placeholder="e.g. 1 234 567 890"
                />
              </div>
              <div className="button-wrapper">
                {/* <CustomButton
                  onClick={() =>
                    console.log("You clicked on the yellow square!")
                  }
                  buttonType="primary"
                  disabled
                  ref={ref}
                >
                  Next Step
                </CustomButton> */}
                <CustomButton
                  size="lg"
                  colorscheme="blue"
                  ref={ref}
                  onClick={() =>
                    console.log("You clicked on the yellow square!")
                  }
                >
                  next
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepWindow;
