import React  from 'react'
import "./WindowsIcons.css";
import {
    BrowserRouter as Router,
    Route, Link
  } from "react-router-dom";
import { HiddenContext, } from './HiddenContext';


  export default function WindowsIcons(){
  const { hideLol, hideCreed, hideSteam, hideGoogle} = React.useContext(HiddenContext);
  return (
        <div className="windows__icons">
         
          {!hideSteam &&  (      
           <Router>
           <Link className="windows__icon"
            onClick={() => {
            window.location.href ='https://steam-3e578.web.app/';
            }}>
            <img src="./icons/steamm.png" alt="steamm"/>
            <figcaption>Steam</figcaption>
                </Link>
            </Router>)}
         
          {!hideLol &&  (  
          <Router>
           <Link className="windows__icon" 
             onClick={() => {
             window.location.href = 'https://league-583b0.web.app/';
             }}>                
             <img src="/icons/lol.png"/>
             <figcaption>League of Legends</figcaption>
           </Link>
          </Router> ) }


          {!hideGoogle &&  (     
          <Router>
           <Link className="windows__icon" 
              onClick={() => {
              window.location.href = 'https://fir-8a802.web.app';
              }}>
              <img src="./icons/icons8-chrome-48.png"/>
              <figcaption>Google clone</figcaption>
            </Link>
          </Router>)}

                           
          {!hideCreed &&  (  
          <Router>
           <Link className="windows__icon" 
             onClick={() => {
             window.location.href = 'https://assassins-creed-81c9a.web.app/';
             }}>
            <img src="./images/creed.png"/>
            <figcaption>Assassin's Creed</figcaption>
          </Link>
          </Router>)}
            </div>

                    
  
                
    )

}
