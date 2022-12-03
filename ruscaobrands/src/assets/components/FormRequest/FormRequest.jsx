import {React, useContext} from "react";
import SForm from "./Style.js";
import Button from '../Button/Button'
import { LangContext } from "../../../Context/LangProvider";

const FormRequest = () => {
  const langContext = useContext(LangContext)
  return (
    <SForm>
      <h4>{langContext.texts.Forms.title[langContext.lang]}</h4>
      <div className="twoBoxs">
        <input className="input" type="text" placeholder={langContext.texts.Forms.firstName[langContext.lang]} />
        <input className="input" type="text" placeholder={langContext.texts.Forms.lastName[langContext.lang]} />
      </div>
      <input className="input" type="text" placeholder={langContext.texts.Forms.email[langContext.lang]} />

      <h4>{langContext.texts.Forms.yourProject[langContext.lang]}</h4>
      <textarea
        className="input"
        name=""
        id=""
        cols="45"
        rows="10"
        placeholder={langContext.texts.Forms.yourHistory[langContext.lang]}
      ></textarea>
      <Button text={langContext.texts.Forms.Send[langContext.lang]} />
    </SForm>
  );
};

export default FormRequest;
