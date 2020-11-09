import React, {useState, useRef, useEffect} from 'react';
import "./TaskBar.css";	
import {
  BrowserRouter as Router,
  Route, Link
} from "react-router-dom";
import Clock from "./Clock";
import FlagIcon from '@material-ui/icons/Flag';
import VolumeUpTwoToneIcon from '@material-ui/icons/VolumeUpTwoTone';
import WifiTwoToneIcon from '@material-ui/icons/WifiTwoTone';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ControlPanel from './ControlPanel';
import Wifi from './Wifi';
import Sound from './Sound';
import Flag from './Flag';
import MenuBar from './MenuBar';
import HiddenIcons from './HiddenIcons';
import WindowsIcons from './WindowsIcons';



const TaskBar=()=>{
  
  /* TaskBar States */
  const [isExpandOpen, setIsExpandOpen]= React.useState(false)
  const [isWifiOpen, setIsWifiOpen]= React.useState(false)
  const [isSoundOpen, setIsSoundOpen]= React.useState(false)
  const [isFlagOpen, setIsFlagOpen]= React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  
  /* Hover States */

  const [inHover, setHoverMenu] = React.useState(false);
  const [inHoverGoogle, setHoverGoogle] = React.useState(false);
  const [inHoverHidden, setHoverHidden] = React.useState(false);
  const [inHoverFlag, setHoverFlag] = React.useState(false);
  const [inHoverSound, setHoverSound] = React.useState(false);
  const [inHoverWifi, setHoverWifi] = React.useState(false);

  
  
 

 
  
  
  const ref=useRef()

  function openMenu(){
    setIsMenuOpen(true)
  }
  function closeMenu(){
    setIsMenuOpen(false)
  }
 

  
  function openExpand(){
    setIsExpandOpen(true)
  }
  function closeExpand(){
    setIsExpandOpen(false)
  }
  function openWifi(){
    setIsWifiOpen(true)
  }
  function closeWifi(){
    setIsWifiOpen(false)
  }
  function openSound(){
    setIsSoundOpen(true)
  }
  function closeSound(){
    setIsSoundOpen(false)
  }

  function openFlag(){
    setIsFlagOpen(true)
  }
  function closeFlag(){
    setIsFlagOpen(false)
  }

 



 const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
    closeFlag();
    }
  };


useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  


  const handleClick1 = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
    closeMenu();
    }
  };



  useEffect(() => {
    document.addEventListener('click', handleClick1);
    return () => {
      document.removeEventListener('click', handleClick1);
    };
  }, []);
  


  const handleClick3 = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
    closeWifi();
    }
  };
useEffect(() => {
    document.addEventListener('click', handleClick3);
    return () => {
      document.removeEventListener('click', handleClick3);
    };
  }, []);



  const handleClick4 = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
    closeSound();
    }
  };
useEffect(() => {
    document.addEventListener('click', handleClick4);
    return () => {
      document.removeEventListener('click', handleClick4);
    };
  }, []);
  
  
  const handleClick5 = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
    closeExpand();
    }
  };
useEffect(() => {
    document.addEventListener('click', handleClick5);
    return () => {
      document.removeEventListener('click', handleClick5);
    };
  }, []);



return (   
 
     <div ref={ref} className="taskbar">
             <img onMouseEnter={() => setHoverMenu(true)}
              onMouseLeave={() => setHoverMenu(false)} onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu" src="./icons/icons8-windows-xp-96.png"/>
             {isMenuOpen?<MenuBar />:null}
            {inHover && <p  className="startMenu">Start</p>}
            
            


            <Router>
            <Link className="chrome" 
              onMouseEnter={() => setHoverGoogle(true)}
              onMouseLeave={() => setHoverGoogle(false)}onClick={() => {
              window.location.href = 'https://fir-8a802.web.app';
              }}>
              <img src="./icons/icons8-chrome-48.png"/>
            </Link>
            </Router>
             {inHoverGoogle && <p  className="GoogleChrome">Open Google Chrome</p>}
                                    <Clock />


            <div className= "taskbar__icons">      
    
            <ExpandLessIcon  onMouseEnter={() => setHoverHidden(true)}
             onMouseLeave={() => setHoverHidden(false)}  onClick={() => setIsExpandOpen(!isExpandOpen)} />
            {isExpandOpen ? <HiddenIcons />: null}
            {inHoverHidden && <p  className="hover__Icons">Show hidden icons</p>}


            <FlagIcon onMouseEnter={() => setHoverFlag(true)}
             onMouseLeave={() => setHoverFlag(false)} onClick={() => setIsFlagOpen(!isFlagOpen)} >
            </FlagIcon>
            {isFlagOpen ? <Flag  /> :null}   
            {inHoverFlag && <p  className="hover__Flag">0 Pc Issues</p>}
            
                 
            
            <WifiTwoToneIcon onMouseEnter={() => setHoverWifi(true)}
             onMouseLeave={() => setHoverWifi(false)}onClick={() => setIsWifiOpen(!isWifiOpen)} >
            </WifiTwoToneIcon>
            {isWifiOpen ? <Wifi />:null}
            {inHoverWifi && <p  className="hover__Wifi">Network 2 Internet access</p>}
                
            
                      
            <VolumeUpTwoToneIcon onMouseEnter={() => setHoverSound(true)}
             onMouseLeave={() => setHoverSound(false)} onClick={() => setIsSoundOpen(!isSoundOpen)}>
            </VolumeUpTwoToneIcon>
            {isSoundOpen? <Sound  />:null}
            {inHoverSound && <p  className="hover__Sound">Speakers: 50%</p>}
            
        
                  
                  </div>
                          </div>
                 
  )
}




export default TaskBar

  
  
