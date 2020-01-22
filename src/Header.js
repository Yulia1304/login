import React from 'react';
import './App.css';
import { NavLink } from "react-router-dom";
import { REGISTER_PATH, SIGN_IN_PATH, FORGOT_PATH } from './Rotes'
function Header() {
  return (
    <div className='App'>
      <NavLink to={SIGN_IN_PATH}>sign-in</NavLink>}
    <NavLink to={REGISTER_PATH}>register</NavLink>}
     <NavLink to={FORGOT_PATH}>forgot</NavLink>}
 </div>
  );
}
export default Header;