import React, { Component } from 'react';
import classes from './App.css';
import CustomZonesButton from './Components/CustomZonesButton';
import CustomZones from './Components/CustomZones';
import Footer from './Components/Footer';
import FTPTable from './Components/FTPTable';
import Navbar from './Components/Navbar';
import Validator from 'validator';
import ZoneInformation from './Components/ZoneInformation';
import Zoom from 'react-reveal';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        title: 'Custom Zones',
        showing: false,
        isZonesVisible: false,
        defaultZones: [.55,.75,.90,1.05,1.2],
        customZ1:"",customZ2:"",customZ3:"",customZ4:"",customZ5:"",
        FTP: "",
        zone1:"",zone2:"",zone3:"",zone4:"",zone5:"",zone6:""
        };
        this.customValueChangeHandler = this.customValueChangeHandler.bind(this);
  }

  displayCustomZonesHandler = () => {
    //////////console.log('button');
    this.setState(prevState => ({ showing: !prevState.showing }));
  }
  
  customValueChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
      //console.log(this.state.customZ1);
  }

  CustomZonesValueHandler = e => {
    console.log(this.state.customZ1);
    console.log(this.state.customZ2);
    console.log(this.state.customZ3);
  }

  ftpInputChange = e => {
    e.preventDefault();
    //console.log(e.target.value) 
    this.setState({FTP: e.target.value})
  }

  checkZone = (e) => {
    var a1 = Math.round(this.state.customZ1 * this.state.FTP) + 1;
    var a2 = Math.round(this.state.customZ2 * this.state.FTP) + 1;
    var a3 = Math.round(this.state.customZ3 * this.state.FTP) + 1;
    var a4 = Math.round(this.state.customZ4 * this.state.FTP) + 1;
    
    if(this.state.FTP !== "" && Validator.isNumeric(this.state.FTP)) {
      {this.calcDefaultZone()

      if(this.state.customZ1 !== ""){
        this.setState({zone1 : "0 to " + Math.round(this.state.customZ1 * this.state.FTP)})     
      }
      if(this.state.customZ2 !== ""){
        this.setState({zone2 : a1 +  " to " + Math.round(this.state.customZ2 * this.state.FTP)})
      }
      if(this.state.customZ3 !== ""){
        this.setState({zone3 : a2 + " to " + Math.round(this.state.customZ3 * this.state.FTP)})
      }
      if(this.state.customZ4 !== ""){
        this.setState({zone4 : a3 + " to " + Math.round(this.state.customZ4 * this.state.FTP)})
      } 
      if(this.state.customZ5 !== ""){
        this.setState({zone5 : a4 + " to " + Math.round(this.state.customZ5 * this.state.FTP)})
      }
    }
  }
}

calcDefaultZone () {
  var zones= [];
  var myArr = this.state.defaultZones;
  this.setState({FTP: this.state.FTP});
  this.setState({zone1: ""})
  this.setState({zone2: ""})
  this.setState({zone3: ""})
  this.setState({zone4: ""})
  this.setState({zone5: ""})

  {
  zones = myArr.map(x => Math.round(x * this.state.FTP));
  this.setState({zone1: '0 to ' + zones[0]})
  var a1 = zones[0]+1;
  this.setState({zone2: a1 + ' to ' + zones[1]})
  var a2 = zones[1]+1;
  this.setState({zone3: a2+ ' to ' + zones[2]})
  var a3 = zones[2]+1;
  this.setState({zone4: a3 + ' to ' + zones[3]})
  var a4 = zones[3]+1;
  this.setState({zone5: a4 + ' to ' + zones[4]})
  this.setState({zone6: "Neuromuscular"})
  }
}

resetButtonHandler = (e) => {
  this.setState({FTP:""})

  this.setState({zone1:""})
  this.setState({zone2:""})
  this.setState({zone3:""})
  this.setState({zone4:""})
  this.setState({zone5:""})
  this.setState({zone6:""})

  this.setState({customZ1:""})
  this.setState({customZ2:""})
  this.setState({customZ3:""})
  this.setState({customZ4:""})
  this.setState({customZ5:""})
  this.setState({customZ6:""})

  console.log(this.state.FTP)
  console.log(this.state.customZ1)
}

  render() {
    return (
      <div className={classes.container}>

        <Navbar />

        <div className={classes.tableWrapper}>
          <div className={classes.CustomZonesButtonWrapper}>
            <CustomZonesButton 
              title={this.state.title} 
              showInputs={this.displayCustomZonesHandler.bind(this)}
            />
          </div>
          
          <div className={ classes.CustomZonesWrapper }>
            { this.state.showing ? <Zoom><CustomZones 
              // Inputs
              onChange={e => this.customValueChangeHandler(e)}
              // Save Button
              onClick={e => this.checkZone(e)}
              customZ1={this.state.customZ1}
              customZ2={this.state.customZ2}
              customZ3={this.state.customZ3}
              customZ4={this.state.customZ4}
              customZ5={this.state.customZ5}
            /></Zoom> : null }
          </div>          
            <FTPTable
              // Get FTP value 
              onChange={e => this.ftpInputChange(e)}
              onClick={e => this.checkZone(e)}
              onClick2={e => this.resetButtonHandler(e)}
              value = {this.state.FTP}
              zone1={this.state.zone1}
              zone2={this.state.zone2}
              zone3={this.state.zone3}
              zone4={this.state.zone4}
              zone5={this.state.zone5}
              zone6={this.state.zone6}
            />
        </div>       
        <ZoneInformation /> 
        <Footer />      
      </div>
    )
  }  
}

export default App;
