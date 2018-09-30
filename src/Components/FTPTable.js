import React from 'react';
import classes from './FTPTable.css';

const FTPTable = (props) => {
  return(
  
    <div>	
      <table>
        <tbody>
          <tr>
            <th className={classes.TableHeader}>
              <input className={classes.FtpInputBox} 
                value={props.value}
                type="text" placeholder="FTP" 
                onChange={props.onChange}
                name="text_name" />
              <button className={classes.GetZonesButton} 
                onClick={props.onClick}>
                Get Zones
              </button>
              <button className={classes.ResetZonesButton}
                onClick={props.onClick2}>
                Reset
              </button>
            </th>
            <th className={classes.TableWatts}>Watts</th>
          </tr>
          <tr>
            <td className={classes.TableZones}>Zone 1: Active Recovery</td> 
            <td className={classes.TableOutput}>{props.zone1}</td>
          </tr>
          <tr>
            <td className={classes.TableZones}>Zone 2: Endurance</td>
            <td className={classes.TableOutput}>{props.zone2}</td>
          </tr>
          <tr>
            <td className={classes.TableZones}>Zone 3: Tempo</td>
            <td className={classes.TableOutput}>{props.zone3}</td>
          </tr>
          <tr>
            <td className={classes.TableZones}>Zone 4: Lactate Threshold</td>
            <td className={classes.TableOutput}>{props.zone4}</td>
          </tr>
          <tr>
            <td className={classes.TableZones}>Zone 5: VO2 Max</td>
            <td className={classes.TableOutput}>{props.zone5}</td>
          </tr>
          <tr>
            <td className={classes.TableZones}>Zone 6: Anaerobic Capacity</td>
            <td className={classes.TableOutput}>{props.zone6}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
 
export default FTPTable; 

