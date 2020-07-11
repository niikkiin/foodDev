import React from 'react';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  return (
    <>
      <h1>Sign In</h1>
      <Link to='/dashboard' exact >Dashboard</Link>
      <br /><br/>
      <Link to='/register' exact >Sign Up</Link>
    </>
  )
}

export default SignInPage;