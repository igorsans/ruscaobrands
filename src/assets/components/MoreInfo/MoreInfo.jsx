import {useState} from "react";
import InfoStyle from "./Style.js";

const MoreInfo = ({titulo, text}) => {
    const [more, setMore] = useState(false)
    const handleInfo = (e) => {
        more ? setMore(false) : setMore(true)
    }
  return (
    <InfoStyle>
      <div onClick={(e) =>handleInfo(e)} className="infoInt">
        <h3>{titulo}</h3>
        <h3 className="InfoPlus">{more ? "-" : "+" } </h3>
      </div>
      <div className="textInfoInt">
        {
            more? <p>
            {text}
          </p> : ''
        }
        
      </div>
    </InfoStyle>
  );
};

export default MoreInfo;
