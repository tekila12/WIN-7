import React from 'react'
import "./MenuBar.css"
import {
    BrowserRouter as Router,
    Route, Link
  } from "react-router-dom";
  import ControlPanel from"./ControlPanel"
const MenuBar =(props)=> {

  const [isPanelOpen, setIsPanelOpen]= React.useState(false)

  function openPanel(){
    setIsPanelOpen(true)
  }
  function closePanel(){
    setIsPanelOpen(false)
  }

  return (
        <div className="menubar">
             <div className="leftmenu__icons">
             <Router>
        <Link className="windows__icon2" 
          onClick={() => {
            window.location.href = 'https://twitter-clone-55639.web.app/';
              }}>
                <img src="./icons/icons8-twitter-48.png" alt="Twitter"/>
                  <h6>Twitter</h6>
                    </Link>
                       </Router>  
             
        <Router>
          <Link className="windows__icon2" 
            onClick={() => {
              window.location.href = 'https://messenger-1340f.web.app';
                }}>                
                    <img src="/icons/icons8-facebook-messenger-48.png"/>
                        <h6>Messenger</h6>
                          </Link>
                            </Router>
          
          <Router>
            <Link className="windows__icon2" 
              onClick={() => {
                window.location.href = 'https://fir-8a802.web.app';
                  }}>
                      <img src="./icons/icons8-chrome-48.png"/>
                        <h6>Google</h6>
                          </Link>
                            </Router>
                            <Router>
            <Link className="windows__icon2" 
              onClick={() => {
                window.location.href = 'https://ajnur3321.github.io/Windows-7-Portfolio/';
                  }}>
                    <img className='menuCreed'src="./images/creed.png"/>
                      <h6>Assassin's Creed</h6>
                        </Link>
                          </Router>
                          <Router>
                          <Link className="windows__icon2" 
              onClick={() => {
                window.location.href = 'https://assassins-creed-81c9a.web.app/';
                  }}>
                    <img src="./icons/icons8-github-48.png"/>
                      <h6>Github</h6>
                        </Link>
                          </Router>     
                          
          <Router>
            <Link className="windows__icon2" 
              onClick={() => {
                window.location.href = '/icons/RESUME (2).pdf';
                  }} >
                    <img src="./icons/icons8-microsoft-word-48.png"/>
                      <h6>Resume</h6>
                        </Link>
                          </Router>
   
   <div className="rightmenu__icons">

     
   <img  src="https://winaero.com/blog/wp-content/uploads/2017/07/Control-panel-windows-10-icon.png"/>
              
                    <h5> Control Panel </h5>
              
            </div>
   
   
   </div>

            
          
        </div>
    )
}

export default MenuBar
