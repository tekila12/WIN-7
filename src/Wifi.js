import React from 'react'
import './Wifi.css'
import WifiTwoToneIcon from '@material-ui/icons/WifiTwoTone';

const Wifi=()=> {
    return (
        <div className="wifi">
            <div className='network'>
                <WifiTwoToneIcon />
                <h6>Network 2</h6>
                <h5 className='h5'>Connected</h5>
            </div>
            <div className="net">
            <p>Network & Internet settings</p>
                <h6 className='h6'>Change settings, such as making a connection metered</h6>
            </div>
        </div>
    )
}

export default Wifi
