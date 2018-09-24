import React from 'react';
import classes from './CustomZonesButton.css';

const CustomZonesButton = (props) => {

return(
  <div>
    <button className={classes.CustomZonesButton}
      onClick={props.showInputs}>{props.title}
    </button>
  </div>
)
}
  

export default CustomZonesButton; 