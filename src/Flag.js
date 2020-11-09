import React from 'react'
import './Flag.css'
import FlagIcon from '@material-ui/icons/Flag';
const Flag=(props)=> {
    return (
        <div className="flag">
            <div className='flag__icon'>
<FlagIcon />
<h5>1 message</h5>
</div>
           
            <h4 className='windows__Defender'>Windows Defender needs to scan your computer</h4>
          
            <div className="action__center">
                <h5>Open Action Center</h5>
            </div>

        </div>
        
    )
}

export default Flag
