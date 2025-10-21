import { useState } from "react";
import "./Signup.css";
import { handleSignUp } from "./Signup";

const SignUp = () => {
  const [newuser, setNewUser] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
    city: "",
    gender: "",
  });

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Create Your Account</h2>

        <div className="form-row">
          <div className="form-column">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              required
              placeholder="Enter your full name"
              value={newuser.name}
              onChange={(event) => {
                setNewUser({
                  ...newuser,
                  name: event.target.value,
                });
              }}
            />
          </div>

          <div className="form-column">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter your email"
              value={newuser.email}
              onChange={(event) => {
                setNewUser({
                  ...newuser,
                  email: event.target.value,
                });
              }}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-column">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              value={newuser.password}
              onChange={(event) => {
                setNewUser({
                  ...newuser,
                  password: event.target.value,
                });
              }}
              placeholder="Create a password"
            />
          </div>

          <div className="form-column">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={newuser.phone}
              onChange={(event) => {
                setNewUser({
                  ...newuser,
                  phone: event.target.value,
                });
              }}
              required
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-column">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={newuser.city}
              onChange={(event) => {
                setNewUser({
                  ...newuser,
                  city: event.target.value,
                });
              }}
              required
              placeholder="Enter your city"
            />
          </div>

          <div className="form-column">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              required
              value={newuser.gender}
              onChange={(event) => {
                setNewUser({
                  ...newuser,
                  gender: event.target.value,
                });
              }}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            handleSignUp(newuser);
          }}
          className="btn-submit"
        >
          Sign Up
        </button>

        <p className="signin-link">
          Already have an account? <a href="#signin">Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
