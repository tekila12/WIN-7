import React,{useState} from 'react'
import "./HiddenIcons.css";
import {
    BrowserRouter as Router,
    Route, Link
  } from "react-router-dom";
const HiddenIcons=(props)=> {
    
  
  return (
        <div className="hidden__icons">
           <Router>
            <Link className="windowsicon2" 
                onClick={() => {
                  window.location.href = 'https://www.skype.com/en/';
                  }}>
                <img src="https://www.freeiconspng.com/thumbs/communication-icon-png/communication-skype-icon-9.png"/>
              </Link>
            </Router>



            <Router>
             <Link className="windowsicon2" 
                onClick={() => {
                  window.location.href = 'https://www.chess.com/today';
                  }}>
                <img src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png"/>
              </Link>
            </Router>
                            
                            
                            
            <Router>
             <Link className="windowsicon2" 
                onClick={() => {
                  window.location.href = 'https://www.eset.com/int/home/antivirus/';
                  }}>
                <img src="https://i1.pngguru.com/preview/893/196/32/slate-icon-776-256x256-icon-eset-icon-2-png-icon.jpg"/>
              </Link>
            </Router>
                            
                            
                            
            <Router>
             <Link className="windowsicon2" 
                onClick={() => {
                  window.location.href = '';
                  }}>
                <img src="https://www.freeiconspng.com/thumbs/gmail-icon/gmail-logo-icon-2.png"/>
              </Link>
            </Router>                           
        </div>
    )
}

export default HiddenIcons;