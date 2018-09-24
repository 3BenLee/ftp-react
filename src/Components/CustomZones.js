import React from 'react';
import classes from './CustomZones.css';

//const CustomZones = (props) => {

class CustomZones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {   
    }; 
  }

  render() {
    return(
      <div>
        {/* <h1>Enter the low end value for any or all zones</h1>     */}
        <div className={classes.CustomZonesColumns} showing={this.state.showing}>
          <h3>*Enter custom zones values in the same format as below. (e.g. .61)</h3>
          <ul className={classes.CustomZonesUnorderedList}> 
            <li className={classes.CustomInputs}>
              <input
                className={classes.CustomInputBoxes} 
                type="text" 
                onChange={this.props.onChange}
                value={this.props.customZ1} 
                placeholder=".55" 
                name="customZ1"
              />
            </li>
            <li className={classes.CustomInputs}>
              <input
                className={classes.CustomInputBoxes}  
                type="text" 
                onChange={this.props.onChange} 
                value={this.props.customZ2}
                placeholder=".75"
                name="customZ2"
              />
            </li>
            <li className={classes.CustomInputs}>
              <input
                className={classes.CustomInputBoxes}  
                type="text"
                onChange={this.props.onChange}
                value={this.props.customZ3} 
                placeholder=".90" 
                name="customZ3"
              />
            </li>
            <li className={classes.CustomInputs}>
              <input
                className={classes.CustomInputBoxes}  
                type="text" 
                onChange={this.props.onChange}
                value={this.props.customZ4} 
                placeholder="1.05"
                name="customZ4"
              />
            </li>
            <li className={classes.CustomInputs}>
              <input 
                className={classes.CustomInputBoxes} 
                type="text" 
                onChange={this.props.onChange}
                value={this.props.customZ5} 
                placeholder="1.20"
                name="customZ5"
              />
            </li>
            <button 
              className={classes.SaveButton} 
              onClick={this.props.onClick}>
              Save
            </button>  
          </ul>
        </div> 
      </div>               
    )
  }
}; 

export default CustomZones; 