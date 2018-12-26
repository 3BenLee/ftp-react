import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './FTPTable.css';
import { setFTP } from '../Actions/setFTPAction';
import {calculateDefaultZones} from '../Actions/calculateDefaultZonesAction';

class ZonesTable extends Component {

  state = {
    FTPvalue: '',
    getZonesClicked: false
  }

  ftpOnChangeHandler = e => {
    // e.preventDefault();
    // console.log('type')
    this.setState({FTPvalue: e.target.value})
    console.log(this.state.FTPvalue)
  }

  getZonesHandler = () => {
    this.props.onSetFTP(this.state.FTPvalue);
    this.props.onCalculateDefaultZones(this.state.FTPvalue);
    this.setState({getZonesClicked: true})
  }

  render () {
    return (
      <div>	
        <table>
          <tbody>
            <tr>
              <th className={classes.TableHeader}>
                <input className={classes.FtpInputBox} 
                  type="text" placeholder="FTP" 
                  // onChange={this.ftpOnchangeHandler.bind(this)}
                  onChange={this.ftpOnChangeHandler}
                  name="FTPvalue" />
                <button className={classes.GetZonesButton} 
                  onClick={this.getZonesHandler}>
                  Get Zones
                </button>
                <button className={classes.ResetZonesButton}
                  onClick={this.props.onClick2}>
                  Reset
                </button>
              </th>
              <th className={classes.TableWatts}>Watts</th>
            </tr>
          
          {/* Conditional Render Below Using React.Fragment */}

            {!this.state.getZonesClicked ? 

            <React.Fragment><tr>
              <td className={classes.TableZones}>Zone 1</td>
              <td className={classes.TableOutput}></td>
            </tr>
            <tr>
              <td className={classes.TableZones}>Zone 2: Endurance</td>
              <td className={classes.TableOutput}></td>
            </tr>
            <tr>
              <td className={classes.TableZones}>Zone 3: Tempo</td>
              <td className={classes.TableOutput}></td>
            </tr>
            <tr>
              <td className={classes.TableZones}>Zone 4: Lactate Threshold</td>
              <td className={classes.TableOutput}></td>
            </tr>
            <tr>
              <td className={classes.TableZones}>Zone 5: VO2 Max</td>
              <td className={classes.TableOutput}></td>
            </tr>
            <tr>
              <td className={classes.TableZones}>Zone 6: Anaerobic Capacity</td>
              <td className={classes.TableOutput}></td>
            </tr></React.Fragment> 
            
            :

            <React.Fragment><tr>
                <td className={classes.TableZones}>Zone 1</td>
                <td className={classes.TableOutput}>{this.props.zones[0] + " to " + this.props.zones[1]}</td>
              </tr>
              <tr>
                <td className={classes.TableZones}>Zone 2: Endurance</td>
                <td className={classes.TableOutput}>{this.props.zones[1] + " to " + this.props.zones[2]}</td>
              </tr>
              <tr>
                <td className={classes.TableZones}>Zone 3: Tempo</td>
                <td className={classes.TableOutput}>{this.props.zones[2] + " to " + this.props.zones[3]}</td>
              </tr>
              <tr>
                <td className={classes.TableZones}>Zone 4: Lactate Threshold</td>
                <td className={classes.TableOutput}>{this.props.zones[3] + " to " + this.props.zones[4]}</td>
              </tr>
              <tr>
                <td className={classes.TableZones}>Zone 5: VO2 Max</td>
                <td className={classes.TableOutput}>{this.props.zones[4] + " to " + this.props.zones[5]}</td>
              </tr>
              <tr>
                <td className={classes.TableZones}>Zone 6: Anaerobic Capacity</td>
                <td className={classes.TableOutput}>{this.props.zones[5] + " to "} Neuromuscular</td>
              </tr>
            </React.Fragment>
          }
            
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.defaultZones.zones)
  return {
    // FTP:
    zones: state.defaultZones.zones
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetFTP: (threshold) => dispatch(setFTP(threshold)),
    onCalculateDefaultZones: (threshold) => dispatch(calculateDefaultZones(threshold))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps) (ZonesTable); 

