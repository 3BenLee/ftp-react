import React from 'react';

//import classes from '.CustomZonesButton.css';
//import CustomZones from './CustomZones/CustomZones';

const CustomZonesButton = (props) => {

return(
  <div>
    <button 
      onClick={props.showInputs}>{props.title}
    </button>
  </div>
)
}
  

export default CustomZonesButton; 