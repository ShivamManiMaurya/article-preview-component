import React from "react";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pintrest from "../images/icon-pinterest.svg";


function ClickedSharePopup() {



    return (
        <div className="share-main">
            <div className="popup-share-heading">
                <h6>S H A R E</h6>
            </div>
            <div className="popup-facebook">
                <img src={facebook} alt="facebook-icon" />
            </div>
            <div className="popup-twitter">
                <img src={twitter} alt="twitter-icon" />
            </div>
            <div className="popup-pintrest">
                <img src={pintrest} alt="pinterest-icon" />
            </div>
        </div>
    );

}