import React,{} from 'react'
import './Sound.css'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import VolumeUpTwoToneIcon from '@material-ui/icons/VolumeUpTwoTone';

const Sound=(props)=> {

  
    return (
        <div className='sound__Main'>
        <div className="sound">
            <div className="speaker">
                <p>Speaker (2-High Definition Audio Device)</p>
                <ExpandLessIcon/>
            </div>
            <div className="sound__volume">
              <VolumeUpTwoToneIcon />
            <input  type="range" id="fader" min="0" value="100" max="100" step="5" oninput="outputUpdate(value)" class="horizontal" orient="horizontal"/>
            </div>
        </div>
        </div>
    )
}

export default Sound

