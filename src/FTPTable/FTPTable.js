import React from 'react';
import classes from './FTPTable.css';
//import CustomZones from './CustomZones/CustomZones';

const FTPTable = (props) => {


    // calculateZonesHandler = () => {
    //     var FTP = this.target.ftpValue;
    //     var a1Results = calcZone1(FTP);
        
    //     function calcZone1 (FTP) {
    //     if (this.target.z1Value) {
    //         var a1 = Math.round(FTP * .40);
    //         this.setState
    //         //document.getElementById("z1").innerHTML = '0 to ' + a1;	
    //         //return a1;
    //     } else if (this.target.z1Value == null) {
    //         a1 = Math.round(FTP * .55);
    //         document.getElementById("z1").innerHTML = '0 to ' + a1;	
    //         //return a1;
    //     }
    // }

    return(
        <div>	
            <table>
                <tbody>
                    <tr>
                        <th>
                            <input type="text" placeholder="FTP" id="ftp-input" 
                                name="text_name" className="ftp" value={350}/>
                            <button className="myBtn" onclick={this.calculateZonesHandler()}>Get Zones</button>
                            <button className="myBtn" id="btn-reset">Reset</button>
                        </th>
                        <th>Watts</th>
                    </tr>
                    <tr>
                        <td>Zone 1: Active Recovery</td> 
                        <td id="z1" className="calc"></td>
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

  //   var a3Results = calcZone2(FTP, a1Results);
  //   var a5Results = calcZone3(FTP, a3Results);
  //   var a7Results = calcZone4(FTP, a5Results);
  //   var a8Results = calcZone5(FTP, a7Results);
  //   neuro();
  //   fadeCalc();

    // function calcZone1(FTP) {
    //   a1 = Math.round(FTP * .55);
    //   document.getElementById("z1").innerHTML = '0 to ' + a1;	
    //   return a1;
    // }
  
  //   function calcZone2(FTP, a1Results) {
  //      var a2 = (a1Results + 1);
  //      a3 = Math.round(FTP * .75);
  //     document.getElementById("z2").innerHTML = a2 + ' to ' + a3;
  //     return a3;
  //   }
  
  //   function calcZone3(FTP, a3Results) {
  //     var a4 = (a3Results + 1);
  //     a5 = Math.round(FTP * .90);
  //     document.getElementById("z3").innerHTML = a4 + ' to ' + a5;
  //     return a5;
  //   }
  
  //   function calcZone4(FTP, a5Results) {
  //     var a6 = (a5Results + 1);
  //     a7 = Math.round(FTP * 1.05);
  //     document.getElementById("z4").innerHTML = a6 + ' to ' + a7;
  //     return a7;
  //   }
  
  //   function calcZone5(FTP, a7Results) {
  //     var a8 = (a7Results + 1);
  //     a9 = Math.round(FTP * 1.20);
  //     document.getElementById("z5").innerHTML = a8 + ' to ' + a9;
  //     return a9;
  //   }
  
  //   function neuro() {
  //     document.getElementById("z6").innerHTML = 'Neuromuscular';
  //   }
  // }