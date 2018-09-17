import React, { Component } from 'react';
import classes from './App.css';
import Navbar from './Components/Navbar';
import CustomZonesButton from './Components/CustomZonesButton';
import CustomZones from './Components/CustomZones';
import FTPTable from './Components/FTPTable';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
    title: 'Custom Zones',
    showing: false,
    FTP: "",
    a1:"",a2:"",a3:"",a4:"",a5:"",
    zone1:"",zone2:"",zone3:"",zone4:"",zone5:"",zone6:""
    }
  }

  displayCustomZonesHandler = () => {
    //console.log('button');
    this.setState(prevState => ({ showing: !prevState.showing }));
  }
  
  calcZone1 = (FTP) => {
    //console.log("button clicked!")
    this.setState({a1: Math.round(FTP * .55)});
    this.setState({zone1: "0 to" + this.state.a1});
    //alert(this.state.a1)
  }

  calcZone2 = (FTP) => {
    this.setState({a2: this.state.a1 + 1});
    this.setState({a3: Math.round(FTP * .75)});
    this.setState({zone2: this.state.a2  + "to" + this.state.a3})
  }

  calcZone3 = (FTP) => {
    this.setState({a3: this.state.a3 + 1});
    this.setState({a4: Math.round(FTP * .90)});
    this.setState({zone3: this.state.a3  + "to" + this.state.a4})
  }

  calcZone4 = (FTP) => {
    this.setState({a4: this.state.a4 + 1});
    this.setState({a5: Math.round(FTP * 1.05)});
    this.setState({zone4: this.state.a4 + "to" + this.state.a5})
  }

  calcZone5 = (FTP) => {
    //console.log("button clicked!")
    this.setState({a6: Math.round(FTP * 1.20)});
    this.setState({zone5: this.state.a5 + "to" + this.state.a6})
  }

  neuro = () => {
    this.setState({zone6: "Neuromuscular"});
		// document.getElementById("z6").innerHTML = 'Neuromuscular';
	}

  ftpInputChange = e => {
    e.preventDefault();
    //console.log(e.target.value) 
    this.setState({FTP: e.target.value})
  }
  ftpClickHandler = e => {
    //e.preventDefault()
    this.calcZone1(this.state.FTP)
    
    // this.calcZone2(this.state.FTP)
    // this.calcZone3(this.state.FTP)
    // this.calcZone4(this.state.FTP)
    // this.calcZone5(this.state.FTP)
    //this.neuro
    //console.log(this.state.FTP)
  }

  render() {
    return (
      <div className={ classes.container }>
        <Navbar />
        <CustomZonesButton title={this.state.title} showInputs={this.displayCustomZonesHandler.bind(this)}/>
        { this.state.showing ? <CustomZones /> : null }
        <FTPTable 
        zone1={this.state.zone1}
        onChange={e => this.ftpInputChange(e)}
        onClick={e => this.ftpClickHandler(e)}
        />
      </div>
    )
  }  
}

export default App;


