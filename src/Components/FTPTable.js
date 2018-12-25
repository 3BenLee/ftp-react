import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './FTPTable.css';
import { setFTP } from '../Actions/setFTPAction';


class ZonesTable extends Component {

  state = {
    FTPvalue: ''
  }

  ftpOnchangeHandler = e => {
    e.preventDefault();
    console.log('type')
    this.setState({FTPvalue: e.target.value})
    console.log(this.state.FTPvalue)
  }

  getFTPValue = () => {
    // e.preventDefault();
    //console.log(e.target.value) 
    // this.setState({FTP: e.target.value})
    this.props.onSetFTP(this.state.FTPvalue)
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
                onChange={this.ftpOnchangeHandler}
                name="FTPvalue" />
              <button className={classes.GetZonesButton} 
                onClick={this.getFTPValue}>
                Get Zones
              </button>
              <button className={classes.ResetZonesButton}
                onClick={this.props.onClick2}>
                Reset
              </button>
            </th>
            <th className={classes.TableWatts}>Watts</th>
          </tr>
          <tr>
            <td className={classes.TableZones}>Zone 1</td>
            <button>Custom</button> 
            <td className={classes.TableOutput}>{this.props.zone1}</td>
          </tr>
          <tr>
            <td className={classes.TableZones}>Zone 2: Endurance</td>
            <td className={classes.TableOutput}>{this.props.zone2}</td>
          </tr>
          <tr>
            <td className={classes.TableZones}>Zone 3: Tempo</td>
            <td className={classes.TableOutput}>{this.props.zone3}</td>
          </tr>
          <tr>
            <td className={classes.TableZones}>Zone 4: Lactate Threshold</td>
            <td className={classes.TableOutput}>{this.props.zone4}</td>
          </tr>
          <tr>
            <td className={classes.TableZones}>Zone 5: VO2 Max</td>
            <td className={classes.TableOutput}>{this.props.zone5}</td>
          </tr>
          <tr>
            <td className={classes.TableZones}>Zone 6: Anaerobic Capacity</td>
            <td className={classes.TableOutput}>{this.props.zone6}</td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  }
}

const mapStateToProps = () => {
  return {
    // FTP:
    // zones:
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetFTP: (threshold) => dispatch(setFTP(threshold))

  }
}
 
export default connect(mapStateToProps, mapDispatchToProps) (ZonesTable); 

