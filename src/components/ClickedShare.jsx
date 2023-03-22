import React from "react";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pintrest from "../images/icon-pinterest.svg";


function ClickedShare(props) {

    return (
        <div className="main">
            <div className="clicked-share-heading">
                <p>S H A R E</p>
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
        </div>

    );
}


export default ClickedShare;