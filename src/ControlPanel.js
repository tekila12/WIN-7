import React, {useState, useRef, useCallback,ReactFragment} from 'react'
import "./ControlPanel.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MinimizeIcon from '@material-ui/icons/Minimize';
import CloseIcon from '@material-ui/icons/Close';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import {Button, Typography} from "@material-ui/core";
import Draggable from 'react-draggable';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { HiddenContext, } from './HiddenContext';

export default function ControlPanel(props) {
    

const handle = useFullScreenHandle();
  

                /* Uninstall states */

const { hideMessenger, handleClick } = React.useContext(HiddenContext);
const { hideTwitter, handleClick9 } = React.useContext(HiddenContext);
const { hideGoogle, handleClick10 } = React.useContext(HiddenContext);
const { hideCreed, handleClick11 } = React.useContext(HiddenContext);


return (
  
<FullScreen handle={handle}>
 <Draggable>
   <div className="control__panel" >
   <div className =" outside__controlpanel">
     <ArrowBackIcon onClick={props.closePanel}/>
     <ArrowForwardIcon/>
   <div className="Icons">  
     <MinimizeIcon />
     <FullscreenIcon  onClick={handle.enter}/>
     <CloseIcon onClick={props.closePanel}className='exit' />
   </div>
   </div>

   <div className="bottom__page">
    <h4> Control Panel Home </h4>            
   </div>
   <div className="right__page">
    <h5> To unistall an app, select it from the list and then click Uninstall.</h5>


   {!hideTwitter&& (
   <li>
   <img  className="image"src="./icons/icons8-twitter-48.png"/>
     <Button onClick={handleClick9}variant="outlined"
    className="button__rightpage" >Uninstall</Button>
   <caption className="text">
   Twitter
   </caption>
   </li>)}


   {!hideMessenger && (
   <li>
   <img  className="image"src="/icons/icons8-facebook-messenger-48.png"/>
    <Button onClick={handleClick} variant="outlined"
    className="button__rightpage" >Uninstall</Button>
   <caption className="text">
    Messenger
   </caption>
   </li>)}


   {!hideGoogle && ( 
   <li>
   <img  className="image"src="./icons/icons8-chrome-48.png"/>
    <Button onClick={handleClick10} variant="outlined" 
    className="button__rightpage" >Uninstall</Button>
   <caption  className="text" > Google</caption>
   </li>)}

      
   {!hideCreed && (
   <li>
   <img  className="image"src="./images/creed.png"/>
    <Button onClick={handleClick11} variant="outlined"
    className="button__rightpage" >Uninstall</Button>
   <caption   className="text" > Assassin's Creed</caption>
   </li>)}


   </div>
    </div>
    </Draggable>
  </FullScreen>
  
    )
 }