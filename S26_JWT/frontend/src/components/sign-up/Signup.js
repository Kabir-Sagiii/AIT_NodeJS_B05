import axios from "axios";
const url = "http://localhost:5000/api/auth/sign-up";
import { toast } from "react-toastify";
export const handleSignUp = async (newuser) => {
  try {
    var res = await axios.post(url, newuser);
    if (res.data.ok) {
      toast.success("User is Registered");
    } else {
      throw Error(res.data.error);
    }
  } catch (error) {
    toast.error(error.message);
  }
};
