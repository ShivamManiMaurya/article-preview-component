import '../Styles/MobileFirst.css';
import "../Styles/desktop.css";
import drawerImg from "../images/drawers.jpg";
import Share from "../components/Share";
import ClickedShare from "../components/ClickedShare";
import { useState } from 'react';
import Button from "../components/Button";



function App() {

  
  const [flag, setFlag] = useState(false);


  function getVal (data) {
    setFlag(data);
  }



  return (
    <div className="App">
      <div className="img-div">
        <img className='img' src={drawerImg} alt="drawer" />
      </div>
      <div className="lower-content">
        <div className="content-div">
          <h4 className="content-heading">
            Shift the overall look and feel by adding these wonderful 
            touches to furniture in your home
          </h4>
          <p className="content-para">
            Ever been in a room and felt like something was missing? Perhaps 
            it felt slightly bare and uninviting. I’ve got some simple tips 
            to help you make any room feel complete.
          </p>
        </div>
        <div className='Footer'>
          <Share />
          {flag && <ClickedShare /> } 
          <Button Clicked={getVal}/>
        </div>
      </div>
    </div>
  );
}

export default App;
