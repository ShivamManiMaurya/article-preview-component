import React from "react";
import shareImg from "../images/icon-share.svg";


function Button(props) {

    const [state, setState] = React.useState(true);

    function handleClick () {
        setState(!state);
        props.Clicked(state);
    }

    return (
        <div className="share-btn-div">
            <button onClick={handleClick}>
                <img src={shareImg} alt="share" />
            </button>
        </div>
    );

}


export default Button;