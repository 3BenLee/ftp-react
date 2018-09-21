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
            <li><input 
              type="text" 
              onChange={this.props.onChange}
              value={this.state.customZ1} 
              placeholder=".55" 
              name="customZ1"/>
            </li>
            <li><input type="text" 
              onChange={this.props.onChange} 
              placeholder=".75"
              name="customZ2"/>
            </li>
            <li><input type="text"
              onChange={this.props.onChange} 
              placeholder=".90" 
              name="customZ3"/>
            </li>
            <li><input type="text" 
              onChange={this.props.onChange} 
              placeholder="1.05"
              name="customZ4"/>
            </li>
            <li><input type="text" 
              onChange={this.props.onChange} 
              placeholder="1.20"
              name="customZ5"/>
            </li>
            <button onClick={this.props.onClick}className="myBtn">Save</button>  
          </ul>
        </div> 
      </div>               
    )
  }
}; 

export default CustomZones; 