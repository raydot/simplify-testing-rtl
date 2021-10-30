import React from 'react';

const Login = () => {
  function submitFunction(e) {
    console.log('submit');
    e.preventDefault();
  }
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={submitFunction} data-testid='form'>
        <div>
          <label htmlFor='usernameInput'>Username:</label>
          <br />
          <input type='text' name='username' id='usernameInput' />
        </div>
        <div>
          <label htmlFor='passwordInput'>
            Password:
            <input type='text' name='password' id='passwordInput' />
          </label>
        </div>
        <p>
          <input type='checkbox' name='remember' value='Remember Me' />
        </p>
        <p>
          <input type='button' name='submit' value='Login' />
        </p>
      </form>
    </div>
  );
};

export default Login;
