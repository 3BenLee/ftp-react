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
          <ul className={classes.CustomZonesUnorderedList}> 
            <li><input type="text" placeholder="Z1" 
                name="text_name"/>
            </li>
            <li><input type="text" placeholder="Z2"
                name="text_name"/>
              </li>
            <li><input type="text" placeholder="Z3" 
                name="text_name"/>
            </li>
          </ul>
        </div>
        <div className={classes.CustomZonesColumns} showing={this.state.showing}>
          <ul className={classes.CustomZonesUnorderedList}> 
            <li><input type="text" placeholder="Z4"
                name="text_name"/>
            </li>
            <li><input type="text" placeholder="Z5"
                name="text_name"/>
            </li>  
          </ul>
        </div> 
      </div>               
    )
  }
}; 

export default CustomZones; 