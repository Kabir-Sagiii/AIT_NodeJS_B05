import axios from "axios";
import { toast } from "react-toastify";
export function signin(email, password, login) {
  if (email && password) {
    axios
      .post("http://localhost:5000/api/Auth/sign-in", { email, password })
      .then((res) => {
        if (res.data.ok) {
          toast.success("User LoggedIn", { autoClose: 1500 });
          login();
        } else {
          throw Error(res.data.error);
        }
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 1500 });
      });
  } else {
    toast.error("Please Enter the credentials", { autoClose: 1500 });
  }
}
