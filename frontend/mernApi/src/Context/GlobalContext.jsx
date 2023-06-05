import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
const initialState = {
  user: null,
  user_id: null,
  token: null,
  signup: () => {},
  login: () => {},
  logout: () => {},
};
export const GlobalContext = createContext(initialState);
export function GlobalProvider({ children }) {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  const [userId, setUserId] = useState(
    localStorage.getItem("authToken")
      ? jwt_decode(localStorage.getItem("authToken"))._id
      : null
  );
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  //Register User....
  const signup = async (name, email, password) => {
    if (name == "" || password === "" || email === "") {
      alert("Please Enter all the fields");
      return;
    }
    const response = await fetch("http://localhost:5000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    if (response.status === 200) {
      alert("User Created Successfully");
      <Navigate to="/login" />;
    } else {
      alert("User Already Exists");
    }
  };
  const login = async (email, password) => {
    if (email === "" || password === "") {
      alert("Please Enter Valid Credentials");
      return;
    }
    const response = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (response.status === 200) {
      const data = await response.json();
      const token = data.token;
      localStorage.setItem("authtoken", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(data.user.name));
      setUserId(data.user._id);
      setAuthToken(token);
      setUser(data.user.name);
      // <Navigate to="/home" />;
      // alert("Login Successfull");
    } else {
      alert("Invalid Credentials");
    }
  };
  const logout = () => {
    setAuthToken(null);
    setUserId(null);
    setUser(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
  };
  const update = () => {
    if (authToken === null) logout();
    setUserId(jwt_decode(localStorage.getItem("authToken"))._id);
    setAuthToken(JSON.parse(localStorage.getItem("authToken")));
    setUser(JSON.parse(localStorage.getItem("user")));
  };
  const contextValue = {
    user: user,
    user_id: userId,
    token: authToken,
    signup: signup,
    login: login,
    logout: logout,
  };
  // useEffect(() => {
  //   update();
  // }, []);
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}
