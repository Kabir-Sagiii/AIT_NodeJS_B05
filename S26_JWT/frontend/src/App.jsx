import { useState } from "react";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import SignIn from "./components/sign-in/Signin.jsx";
import { ToastContainer } from "react-toastify";
import SignUp from "./components/sign-up/Signup.jsx";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <ToastContainer />
      {isLoggedIn ? (
        <div>
          <Nav logout={logout} />
          <Home />
        </div>
      ) : (
        <div>
          <SignIn login={login} />
          <SignUp />
        </div>
      )}
    </div>
  );
}

export default App;
