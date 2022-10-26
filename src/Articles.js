import React from "react";
import './css/Center.css';

import goose from './Images/goose.gif';

function Articles(){
    return(
        <div>
            <div className="center">
                This section will be edited when the articles have been retrieved in the future.
                Please enjoy this gif while you are here.
            </div>
            <div className="goose-center">
                <img src={goose} alt={"Loading ..."}/>
            </div>
        </div>
    );
}

export default Articles;
