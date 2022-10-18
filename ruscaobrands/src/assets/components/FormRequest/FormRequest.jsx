import React from "react";
import SForm from "./Style.js";
import Button from '../Button/Button'

const FormRequest = () => {
  return (
    <SForm>
      <h4>Personal information</h4>
      <div className="twoBoxs">
        <input className="input" type="text" placeholder="First name" />
        <input className="input" type="text" placeholder="Last Name" />
      </div>
      <input className="input" type="text" placeholder="Your email" />

      <h4>Your Project</h4>
      <textarea
        className="input"
        name=""
        id=""
        cols="45"
        rows="10"
        placeholder="Tell me about your story"
      ></textarea>
      <Button text="SEND YOUR REQUEST" />
    </SForm>
  );
};

export default FormRequest;
