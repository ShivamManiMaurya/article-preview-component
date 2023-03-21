import React from "react";
import avatar from "../images/avatar-michelle.jpg"


function Share() {

    return (
        <div className="share-div">
          <div className="share-img-div">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="share-content-div">
            <h6 className='share-heading'>Michelle Appleton</h6>
            <p className="share-para">28 Jun 2020</p>
          </div>
        </div>
    )
}


export default Share;