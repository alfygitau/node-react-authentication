import axios from "axios";

const API_URL = "/api/users/register";
const API_LOGIN_URL = "/api/users/login";

// register user
const register = async (userData) => {
  const res = await axios.post(API_URL, userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

// login user
const login = async (userData) => {
    const res = await axios.post(API_LOGIN_URL, userData);
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
  };

const logout = async () => {
  localStorage.removeItem("user");
};

const authService = { register, logout, login };
export default authService;
