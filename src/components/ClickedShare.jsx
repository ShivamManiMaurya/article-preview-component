import React, { useState } from "react";
import shareImg from "../images/icon-share.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pintrest from "../images/icon-pinterest.svg";


function ClickedShare(props) {

    const [state, setState] = useState(false);

    function handleClick() {
        setState(false);

        props.Clicked(state);
    }


    return (
        <div className="main">
            <div className="clicked-share-heading">
                <h6>S H A R E</h6>
            </div>
            <div className="facebook">
                <img src={facebook} alt="facebook-icon" />
            </div>
            <div className="twitter">
                <img src={twitter} alt="twitter-icon" />
            </div>
            <div className="pintrest">
                <img src={pintrest} alt="pinterest-icon" />
            </div>
            <div className="share-btn-div">
                <button id="btn-clicked" onClick={handleClick}><img src={shareImg} alt="share" /></button>
            </div>
        </div>

    );
}


export default ClickedShare;