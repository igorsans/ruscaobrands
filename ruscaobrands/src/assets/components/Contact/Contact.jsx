import React, { useContext } from "react";
import { LangContext } from "../../../Context/LangProvider.jsx";
import FormRequest from "../FormRequest/FormRequest.jsx";
import SContact from "./Style.js";

const Contact = () => {
  const langContext = useContext(LangContext);
  return (
    <SContact>
      <div className="infoContact">
        <h3>
          {langContext.texts.Contact.title[langContext.lang][0]}
          <br />{langContext.texts.Contact.title[langContext.lang][1]}<br />
          {langContext.texts.Contact.title[langContext.lang][2]}
        </h3>
        <p>
        {langContext.texts.Contact.contact[langContext.lang][0]}
          <br /> {langContext.texts.Contact.contact[langContext.lang][1]} <br />
          <a href="mailto:hello@ruscaobrands.com">hello@ruscaobrands.com</a>
        </p>
      </div>
      <div>
        <FormRequest />
      </div>
    </SContact>
  );
};

export default Contact;
