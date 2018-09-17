import React from 'react';
import classes from './FTPTable.css';
//import CustomZones from './CustomZones/CustomZones';

const FTPTable = (props) => {
  this.state = {
    zone1:props.zone1
  }
    return(
      <div>	
        <table>
          <tbody>
            <tr>
              <th>
                <input type="text" placeholder="FTP" id="ftp-input" onChange={props.onChange}
                    name="text_name" className="ftp" />
                <button onClick={props.onClick}className="myBtn">Get Zones</button>
                <button className="myBtn" id="btn-reset">Reset</button>
              </th>
              <th>Watts</th>
            </tr>
            <tr>
              <td>Zone 1: Active Recovery</td> 
              <td id="z1" className="calc">{this.state.zone1}</td>
            </tr>
            <tr>
              <td>Zone 2: Endurance</td>
              <td id="z2" className="calc"></td>
            </tr>
            <tr>
              <td>Zone 3: Tempo</td>
              <td id="z3" className="calc"></td>
            </tr>
            <tr>
              <td>Zone 4: Lactate Threshold</td>
              <td id="z4" className="calc"></td>
            </tr>
            <tr>
              <td>Zone 5: VO2 Max</td>
              <td id="z5" className="calc"></td>
            </tr>
            <tr>
              <td className="zone">Zone 6: Anaerobic Capacity</td>
              <td id="z6" className="calc"></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}
 
export default FTPTable; 

