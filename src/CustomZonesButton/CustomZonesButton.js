import React from 'react';
//import classes from '.CustomZonesButton.css';
import CustomZones from '../CustomZones/CustomZones';

class CustomZonesButton extends React.Component {
  constructor() {
    super();
    this.state = {
      showing: false
    }
  }
  
  displayCustomZonesHandler() {
    this.setState(prevState => ({ showing: !prevState.showing }));
  }

  render(){
  
    return(
      <div>
        <button 
        onClick={() => this.displayCustomZonesHandler()}>Add Custom Zones
        </button>
         {
          this.state.showing
            ? <CustomZones />
            : null
        }
      </div>
    )
  }
} 

export default CustomZonesButton; 