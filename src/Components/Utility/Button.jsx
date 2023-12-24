import React from "react";
import {Link} from "react-router-dom";

function Button({linkTo, btnName, styleClass}){
    return(
        <Link to={linkTo}>
            <button type="button" className={`primary-btn rounded-border-radius ${styleClass}`}>{btnName}</button>
        </Link>
    );
}

export default Button;