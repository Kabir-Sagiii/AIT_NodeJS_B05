import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just logging form data
    console.log({ email, password });
    // Add auth logic here
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In to Your Account</h2>

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="form-options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#forgot">Forgot password?</a>
        </div>

        <button type="submit" className="btn-submit">
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
