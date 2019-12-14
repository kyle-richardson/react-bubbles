import React, { useEffect } from "react";
import {connect} from "react-redux"
import {handleChange, login} from "../actions"

const Login = ({history, error, login,credentials, handleChange, token}) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  useEffect(()=> {
    if(!!token){
      localStorage.setItem('token', token);
      history.push('/bubbles')
    }
    // eslint-disable-next-line
  } ,[token])

  return (
    <>
       <h2>Login below</h2>
        {error && <div style={{color: 'red'}}>Username or Password incorrect.</div>}
        <form onSubmit={(e)=>login(e, credentials)}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={e=>handleChange(e, 'credentials')}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={e=>handleChange(e, 'credentials')}
          />
          <button>Log in</button>
        </form>
    </>
  );
};

const mapStateToProps = state => ({
  credentials: state.credentials,
  error: state.error,
  token: state.token

})

export default connect(mapStateToProps,{handleChange, login})(Login);

