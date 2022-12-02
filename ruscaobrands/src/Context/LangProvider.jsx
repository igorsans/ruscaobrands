import { createContext, useState } from "react";
import texts from "./texts.json"
export const LangContext = createContext();

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("EN");
  const changeLag = () =>{
    setLang("PT")
    console.log(lang)
  }
  const context = {
    lang: lang,
    setLang: setLang,
    changeLag: changeLag,
    texts: texts

  };
  return (
    <LangContext.Provider value={context}>{children}</LangContext.Provider>
  );
};

export default LangProvider;
