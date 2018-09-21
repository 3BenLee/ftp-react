import React, { Component } from 'react';
import classes from './App.css';
import Navbar from './Components/Navbar';
import CustomZonesButton from './Components/CustomZonesButton';
import CustomZones from './Components/CustomZones';
import FTPTable from './Components/FTPTable';
import ZoneInformation from './Components/ZoneInformation';
import { isNullOrUndefined } from 'util';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
    title: 'Custom Zones',
    showing: false,
    defaultZones: [.55,.75,.90,1.05,1.2],
    customZ1:"",customZ2:"",customZ3:"",customZ4:"",customZ5:"",
    FTP: "",
    a1:"",a2:"",a3:"",a4:"",a5:"",
    zone1:"",zone2:"",zone3:"",zone4:"",zone5:"",zone6:"Neuromuscular"
    };
    this.customValueChangeHandler = this.customValueChangeHandler.bind(this);
  }

  displayCustomZonesHandler = () => {
    //console.log('button');
    this.setState(prevState => ({ showing: !prevState.showing }));
  }
  
  customValueChangeHandler = e => {
    //e.preventDefault();
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

  ftpClickHandler = e => {
    var zones= [];
    var myArr = this.state.defaultZones;
    this.setState({FTP: this.state.FTP});
    // console.log(this.state.customZ1)
    // if (this.state.customZ1 == "null" || "" || 0 || null
    //     this.state.customZ2 || 
    //     this.state.customZ3 || 
    //     this.state.customZ4 ||
    //     this.state.customZ5 === 0
    //   ){
    zones = myArr.map(x => Math.round(x * this.state.FTP));
    this.setState({zone1: '0 to ' + zones[0]})
    var a1 = zones[0]+1;
    this.setState({zone2: a1 + ' to ' + zones[1]})
    var a2 = zones[1]+1;
    this.setState({zone3: a2 + ' to ' + zones[2]})
    var a3 = zones[2]+1;
    this.setState({zone4: a3 + ' to ' + zones[3]})
    var a4 = zones[3]+1;
    this.setState({zone5: a4 + ' to ' + zones[4]})
  }

  render() {
    return (
      <div className={ classes.container }>

        <Navbar />

        <div className={ classes.tableWrapper }>
          
          <CustomZonesButton 
            title={this.state.title} 
            showInputs={this.displayCustomZonesHandler.bind(this)}
          />

          { this.state.showing ? <CustomZones 
            // Inputs
            onChange={e => this.customValueChangeHandler(e)}
            // Save Button
            onClick={e => this.CustomZonesValueHandler(e)}
          /> : null }
          
          <FTPTable
            // Get FTP value 
            onChange={e => this.ftpInputChange(e)}
            onClick={e => this.ftpClickHandler(e)}
            zone1={this.state.zone1}
            zone2={this.state.zone2}
            zone3={this.state.zone3}
            zone4={this.state.zone4}
            zone5={this.state.zone5}
            zone6={this.state.zone6}
          />

        </div>

          <ZoneInformation />

      </div>
    )
  }  
}

export default App;

  // calcZone1 = (FTP) => {
  //   //console.log("button clicked!")
  //   this.setState({a1: Math.round(FTP * .55)});
  //   this.setState({zone1: "0 to" + this.state.a1});
  //   //alert(this.state.a1)
  // }

  // calcZone2 = (FTP) => {
  //   this.setState({a2: this.state.a1 + 1});
  //   this.setState({a3: Math.round(FTP * .75)});
  //   this.setState({zone2: this.state.a2  + "to" + this.state.a3})
  // }

  // calcZone3 = (FTP) => {
  //   this.setState({a3: this.state.a3 + 1});
  //   this.setState({a4: Math.round(FTP * .90)});
  //   this.setState({zone3: this.state.a3  + "to" + this.state.a4})
  // }

  // calcZone4 = (FTP) => {
  //   this.setState({a4: this.state.a4 + 1});
  //   this.setState({a5: Math.round(FTP * 1.05)});
  //   this.setState({zone4: this.state.a4 + "to" + this.state.a5})
  // }

  // calcZone5 = (FTP) => {
  //   //console.log("button clicked!")
  //   this.setState({a6: Math.round(FTP * 1.20)});
  //   this.setState({zone5: this.state.a5 + "to" + this.state.a6})
  // }

  // neuro = () => {
  //   this.setState({zone6: "Neuromuscular"});
	// 	// document.getElementById("z6").innerHTML = 'Neuromuscular';
  // }