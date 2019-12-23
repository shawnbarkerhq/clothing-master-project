import React from "react";
import "./form-input.styles.scss";

interface FormModel {
  handleChange: string;
  onChange?: any;
  value: string;
  label: string;
}

const FormInput = ({ handleChange, label, ...otherInputProps }: FormModel) => {
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...otherInputProps}
      />
      {label ? (
        <label
          htmlFor=""
          className={`${
            otherInputProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
