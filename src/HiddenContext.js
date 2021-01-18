import React, { useState } from 'react';

export const HiddenContext =React.createContext(false)
 export default function HiddenProvider  ({children}) {
 
 
 const[hideSteam, setHideSteam]= React.useState(false) 
 const[hideLol, setHideLol]= React.useState(false) 
 const[hideGoogle, setHideGoogle]= React.useState(false) 
 const[hideCreed, setHideCreed]= React.useState(false) 

    
function handleClick ()
{setHideSteam(true) } 


function handleClick9 ()
{setHideLol(true) } 

function handleClick10 ()
{setHideGoogle(true) } 


function handleClick11 ()
{setHideCreed(true) } 



return( 

<HiddenContext.Provider value ={{hideSteam, handleClick, hideLol, handleClick9, hideGoogle, handleClick10 , hideCreed, handleClick11,  }}>
     {children} 
</HiddenContext.Provider> 
     
     ); }

