import React  from 'react'
import "./WindowsIcons.css";
import {
    BrowserRouter as Router,
    Route, Link
  } from "react-router-dom";
import { HiddenContext, } from './HiddenContext';


  export default function WindowsIcons(){
  const { hideMessenger} = React.useContext(HiddenContext);
  const { hideTwitter} = React.useContext(HiddenContext);
  const { hideGoogle} = React.useContext(HiddenContext);
  const { hideCreed} = React.useContext(HiddenContext);

  return (
        <div className="windows__icons">
<div className='windows__hover'>
          {!hideTwitter &&  (      
           <Router>
           <Link className="windows__icon"
            onClick={() => {
            window.location.href = 'https://twitter-clone-55639.web.app/';
            }}>
            <img src="./icons/icons8-twitter-48.png" alt="Twitter"/>
            <figcaption>Twitter clone</figcaption>
                </Link>
            </Router>)}

</div>
          {!hideMessenger &&  (  
          <Router>
           <Link className="windows__icon" 
             onClick={() => {
             window.location.href = 'https://messenger-1340f.web.app';
             }}>                
             <img src="/icons/icons8-facebook-messenger-48.png"/>
             <figcaption>Messenger clone</figcaption>
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
