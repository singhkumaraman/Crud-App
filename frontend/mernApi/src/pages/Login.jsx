import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(GlobalContext);
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
      localStorage.setItem("authToken", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(data.user.name));
      context.setUserId(data.user._id);
      context.setAuthToken(token);
      context.setUser(data.user.name);
      alert("Login Successfull");
      nav("/home");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 min-h-screen">
      <div className=" border p-6 rounded-lg  shadow-md  border-gray-200 bg-white ">
        <header className="flex font-bold m-3 mb-5 font-sans text-center text-lg">
          <FaRegArrowAltCircleRight className="my-1 mx-3 text-xl" />
          Login
        </header>
        <span className="font-semibold ml-2">Username</span>
        <div className="p-1 border hover:border-2 border-black rounded-md m-2 ">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full outline-none"
            name="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <span className="font-semibold ml-2">Password</span>
        <div className="p-1 border hover:border-2 border-black rounded-md m-2 ">
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full outline-none"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="m-3 flex justify-between">
          <button
            className="py-1 px-2 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-lg"
            onClick={(e) => {
              // e.preventDefault();
              login(email, password);
            }}
          >
            login
          </button>
          <Link className="my-2" to="/register">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
