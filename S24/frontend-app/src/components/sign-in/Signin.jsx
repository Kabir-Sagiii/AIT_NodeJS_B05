import React, { useState, useRef } from "react";
import "./SignIn.css";
import { signin } from "./Signin";

const SignIn = (props) => {
  const emailRef = useRef();

  const passwordRef = useRef();

  return (
    <div className="signin-container">
      <form className="signin-form">
        <h2>Sign In to Your Account</h2>

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          ref={emailRef}
          required
          placeholder="Enter your email"
        />

        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          required
          placeholder="Enter your password"
        />

        <div className="form-options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#forgot">Forgot password?</a>
        </div>

        <button
          type="button"
          onClick={() => {
            signin(
              emailRef.current.value,
              passwordRef.current.value,
              props.login
            );
          }}
          className="btn-submit"
        >
          Sign In
        </button>

        <p className="signup-link">
          Don’t have an account? <a href="#signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
