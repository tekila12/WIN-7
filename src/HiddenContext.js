import React, { useState } from 'react';

export const HiddenContext =React.createContext(false)
 export default function HiddenProvider  ({children}) {
 
 
 const[hideMessenger, setHideMessenger]= React.useState(false) 
 const[hideTwitter, setHideTwitter]= React.useState(false) 
 const[hideGoogle, setHideGoogle]= React.useState(false) 
 const[hideCreed, setHideCreed]= React.useState(false) 

    
function handleClick ()
{setHideMessenger(true) } 


function handleClick9 ()
{setHideTwitter(true) } 

function handleClick10 ()
{setHideGoogle(true) } 


function handleClick11 ()
{setHideCreed(true) } 


return( 

<HiddenContext.Provider value ={{hideMessenger, handleClick, hideTwitter, handleClick9, hideGoogle, handleClick10 , hideCreed, handleClick11 }}>
     {children} 
</HiddenContext.Provider> 
     
     ); }

