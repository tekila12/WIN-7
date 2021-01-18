import React,{useEffect, useState} from 'react'
import  './EsetNode.css';
import MinimizeIcon from '@material-ui/icons/Minimize';
import CloseIcon from '@material-ui/icons/Close';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FixButton from './FixButton';

const EsetNode=(props)=> {
    return (     
                                 
        <div className='esetNod'>
            <div className='esetNod__container'>
             <img src='./images/eset32.png' />
             <div className="esetNod__icons">
              <MinimizeIcon />
              <FullscreenIcon />             
              <CloseIcon onClick={props.closeEset}className='exit' />
              </div>             
              </div>
              <div className='esetNod__fixButton'>                         
              <img className='left__Image' src="images/nod.png" />
              <img className='eset__Image' src="images/esetpic.png" />             
              <img  className='right__Image' src="images/nodd.png" />
              </div>            
               <div className='esetNod__info'>
                  <FixButton  />  
               </div>             
                </div>
                            
        
    )
}

export default EsetNode;
