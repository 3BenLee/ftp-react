import React from 'react';
//import photo from '../Images/road.jpg';
import classes from './Wrapper.css';
import CustomZones from '../CustomZones/CustomZones';
//import FTPInput from '../FTPInput/FTPInput';
import FTPTable from '../FTPTable/FTPTable';
import CustomZonesButton from '../CustomZonesButton/CustomZonesButton';

const Wrapper = (props) => {

    return(
    <div className={classes.Wrapper}>
        <CustomZonesButton />
        {/* <CustomZones /> */}
        <FTPTable />
    </div>
    )
}; 

export default Wrapper; 