import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import TaskBar from './TaskBar';
import ControlPanel from "./ControlPanel";
import WindowsIcons from './WindowsIcons';
import WindowsIcons1 from './WindowsIcons1';
import HiddenProvider from "./HiddenContext";
import HiddenContext from "./HiddenContext";

export default function App() {
  const [isPanelOpen, setIsPanelOpen]= React.useState(false)
  const [inHoverPanel, setHoverPanel]= React.useState(false)
  
  function openPanel(){
    setIsPanelOpen(true)
  }
  function closePanel(){
    setIsPanelOpen(false)
  }
  


  return (
     <div  className="app">
      <TaskBar />
       <HiddenProvider>
         <img onClick={() => setIsPanelOpen(!isPanelOpen)}  onMouseEnter={() => setHoverPanel(true)}
             onMouseLeave={() => setHoverPanel(false)}  className='controlpanel'  className='controlpanel active' 
         src="https://winaero.com/blog/wp-content/uploads/2017/07/Control-panel-windows-10-icon.png"/>
         {isPanelOpen ? <ControlPanel closePanel={closePanel}  />: null}
          {inHoverPanel && <p  className="hover__Panel">Control Panel</p>}
         <WindowsIcons  />
      </HiddenProvider>
       <WindowsIcons1 />                                           
            </div>
       
   );    
}

