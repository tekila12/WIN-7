import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import TaskBar from './TaskBar';
import ControlPanel from "./ControlPanel";
import WindowsIcons from './WindowsIcons';
import WindowsIcons1 from './WindowsIcons1';
import HiddenProvider from "./HiddenContext";
import HiddenContext from "./HiddenContext";
import EsetNode from './EsetNode';






const App = () => {


const loader = document.querySelector(".preloader");
const showLoader = () => loader.classList.remove("preloader");
const addClass = () => loader.classList.add("loader-hide");

const [isPanelOpen, setIsPanelOpen]= React.useState(false)
const [inHoverPanel, setHoverPanel]= React.useState(false)
const [inHoverEset, setHoverEset]= React.useState(false)
const [isEsetOpen, setIsEsetOpen]= React.useState(false)


  useEffect(() => {
    showLoader();
    addClass();
  },[]);

  

  function openPanel(){
    setIsPanelOpen(true)
  }
  function closePanel(){
    setIsPanelOpen(false)
  }

  function openEset(){
    setIsEsetOpen(true)
  }
  function closeEset(){
    setIsEsetOpen(false)
  }
  
  
  return (
     <div  className="app">
      <TaskBar />
       <HiddenProvider>
         <img  onClick={() => setIsPanelOpen(!isPanelOpen)}  onMouseEnter={() => setHoverPanel(true)}
             onMouseLeave={() => setHoverPanel(false)}  className='controlpanel' 
             src="https://winaero.com/blog/wp-content/uploads/2017/07/Control-panel-windows-10-icon.png"/>
             {isPanelOpen ? <ControlPanel   closePanel={closePanel}  />: null}
             {inHoverPanel && <p  className="hover__Panel">Control Panel</p>}
          <WindowsIcons  />
        </HiddenProvider>

       <WindowsIcons1 />     

         <img onMouseEnter={() => setHoverEset(true)}
             onMouseLeave={() => setHoverEset(false)} onClick={() => setIsEsetOpen(!isEsetOpen)}   className='eset'  
             src="./images/eset.png"/>
             {isEsetOpen ? <EsetNode  closeEset={closeEset}  />: null}
             {inHoverEset && <p  className="hover__eset">EsetNod32</p>}                                     
         </div>
       
   );    
}
export default  App
