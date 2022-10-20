import React from "react";
import { useNavigate } from "react-router-dom";

import saab93 from './saab-finished/PICT0546.JPG';

function SaabLimousine(){
    return(
        <div>
            <img src={saab93} height={200} width={200}/>
        </div>
    );
}

export default SaabLimousine;
