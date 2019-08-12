import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    {...otherProps}
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
  >
    {children}
  </button>
);

export default CustomButton;
