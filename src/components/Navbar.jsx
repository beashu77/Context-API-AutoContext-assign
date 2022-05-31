import React from 'react';
import Display from './Display';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';



const Navbar = () => {
    const {isAuthorized,login,logout}=useContext(AuthContext);
   
  return (
    <div>My App
        <button
        onClick={()=>{
            if(isAuthorized) logout();
            else login("R","Z");

        }}
        >
          {isAuthorized? "Logout":"Login"}
        </button>
        
       {isAuthorized && <Display/>}
    </div>
  )
}

export default Navbar