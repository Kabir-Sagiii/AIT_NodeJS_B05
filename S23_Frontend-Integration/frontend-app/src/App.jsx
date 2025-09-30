import { useState } from "react";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import SignIn from "./components/sign-in/Signin.jsx";
import { ToastContainer } from "react-toastify";
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
        <SignIn login={login} />
      )}
    </div>
  );
}

export default App;
