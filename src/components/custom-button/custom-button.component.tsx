import React from "react";
import "./custom-button.styles.scss";

interface CustomButtonModel {
  children: string;
  isGoogleSignIn: boolean;
}

const CustomButton = ({
  children,
  isGoogleSignIn,
  ...otherButtonProps
}: CustomButtonModel) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
