import React from 'react';
import './App.css';
import Login from './LoginForm/Login';
import { Route } from "react-router-dom";
import Register from './RegisterForm/Register'
import Forgot from './ForgotForm/Forgot'
export const SIGN_IN_PATH = '/sign-in';
export const REGISTER_PATH = '/register';
export const FORGOT_PATH = '/forgot';
function Rotes() {
  return (
    <div >
      <Route path={SIGN_IN_PATH} render={() => <Login />} />
      <Route path={REGISTER_PATH} render={() => <Register />} />
      <Route path={FORGOT_PATH} render={() => <Forgot />} />
    </div>
  );
}
export default Rotes;