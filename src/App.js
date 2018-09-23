import React, { Component } from 'react';
import classes from './App.css';
import Navbar from './Components/Navbar';
import CustomZonesButton from './Components/CustomZonesButton';
import CustomZones from './Components/CustomZones';
import FTPTable from './Components/FTPTable';
import ZoneInformation from './Components/ZoneInformation';
import WhenInView from './Components/WhenInView';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        title: 'Custom Zones',
        showing: false,
        isZonesVisible:false,
        defaultZones: [.55,.75,.90,1.05,1.2],
        customZ1:"",customZ2:"",customZ3:"",customZ4:"",customZ5:"",
        FTP: "",
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

  checkZone = (e) => {
    {this.calcDefaultZone()
      if(this.state.customZ1 != ""){
         this.setState({zone1 : this.state.customZ1 * this.state.FTP})
      }
      if(this.state.customZ2 != ""){
        this.setState({zone2 : this.state.customZ2 * this.state.FTP})
      }
      if(this.state.customZ3 != ""){
        this.setState({zone3 : this.state.customZ3 * this.state.FTP})
      }
      if(this.state.customZ4 != ""){
        this.setState({zone4 : this.state.customZ4 * this.state.FTP})
      } 
      if(this.state.customZ5 != ""){
        this.setState({zone5 : this.state.customZ5 * this.state.FTP})
      }
    }
    console.log(this.state.zone1)

  }
  calcDefaultZone() {
    var zones= [];
    var myArr = this.state.defaultZones;
    this.setState({FTP: this.state.FTP});
    // console.log(this.state.customZ1)
    this.setState({zone1: ""})
    this.setState({zone2: ""})
    this.setState({zone3: ""})
    this.setState({zone4: ""})
    this.setState({zone5: ""})

    // if (this.state.customZ1 == "" &&   this.state.customZ2 == ""
    // &&   this.state.customZ3 == "" 
    // &&   this.state.customZ4 == "" 
    // &&   this.state.customZ5 == ""  )
    {
    zones = myArr.map(x => Math.round(x * this.state.FTP));
    this.setState({zone1: '0 to ' + zones[0]})
   // var a1 = zones[0]+1;
    this.setState({zone2: (this.state.zone1 + 1) + ' to ' + zones[1]})
   
    this.setState({zone3: (this.state.zone2 + 1) + ' to ' + zones[2]})
   
    this.setState({zone4: (this.state.zone3 + 1) + ' to ' + zones[3]})
    
    this.setState({zone5: (this.state.zone4 + 1) + ' to ' + zones[4]})
  }
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
            onClick={e => this.checkZone(e)}
          /> : null }
          
          <FTPTable
            // Get FTP value 
            onChange={e => this.ftpInputChange(e)}
            onClick={e => this.checkZone(e)}
            
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
