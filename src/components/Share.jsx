import React from "react";
import avatar from "../images/avatar-michelle.jpg"
import shareImg from "../images/icon-share.svg";


function Share(props) {

    
    const [state, setState] = React.useState(true);

    function handleClick () {
        setState(true);
        props.Clicked(state);
    }


    return (
        <div className="share-div">
          <div className="share-img-div">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="share-content-div">
            <h6 className='share-heading'>Michelle Appleton</h6>
            <p className="share-para">28 Jun 2020</p>
          </div>
          <div className="share-btn-div">
            <button onClick={handleClick}><img src={shareImg} alt="share" /></button>
          </div>
        </div>
    )
}


export default Share;