import React, { Component } from 'react';
import classes from './FTPTable.css';
//import CustomZones from './CustomZones/CustomZones';

class FTPTable extends Component {
  constructor(props){
    super(props)
      this.state = {
        zone1:""
      }
    
  }
  
  render(){

    return(  
      <div>	
        <table>
          <tbody>
            <tr>
              <th>
                <input type="text" placeholder="FTP" id="ftp-input" onChange={props.onChange}
                    name="text_name" className="ftp" />
                <button onClick={props.onClick} className="myBtn">Get Zones</button>
                <button className="myBtn" id="btn-reset">Reset</button>
              </th>
              <th>Watts</th>
            </tr>
            <tr>
              <td>Zone 1: Active Recovery</td>
              {/* try passing it as a value instead of child  */}
              <td id="z1" className={classes.calc} value={props.zone1}></td>
            </tr>
            <tr>
              <td>Zone 2: Endurance</td>
              <td id="z2" className={classes.calc}>{props.zone2}</td>
            </tr>
            <tr>
              <td>Zone 3: Tempo</td>
              <td id="z3" className={classes.calc}>{props.zone3}</td>
            </tr>
            <tr>
              <td>Zone 4: Lactate Threshold</td>
              <td id="z4" className={classes.calc}>{props.zone4}</td>
            </tr>
            <tr>
              <td>Zone 5: VO2 Max</td>
              <td id="z5" className={classes.calc}>{props.zone5}</td>
            </tr>
            <tr>
              <td className="zone">Zone 6: Anaerobic Capacity</td>
              <td id="z6" className={classes.calc}>{props.zone6}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
 
export default FTPTable; 

