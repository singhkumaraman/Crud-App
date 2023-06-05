import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(GlobalContext);
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 min-h-screen">
      <div className=" border p-6 rounded-lg  shadow-md  border-gray-200 bg-white ">
        <header className="flex font-bold m-3 mb-5 font-sans text-center text-lg">
          <FaUserAlt className="my-1 mx-3" /> Register User
        </header>
        <span className="font-semibold ml-2">User</span>
        <div className="p-1 border hover:border-2 border-black rounded-md m-2 ">
          <input
            type="text"
            placeholder="User Name"
            className="w-full outline-none"
            name="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <span className="font-semibold ml-2">Email</span>
        <div className="p-1 border hover:border-2 border-black rounded-md m-2 ">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full outline-none"
            name="user"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <span className="font-semibold ml-2">Password</span>
        <div className="p-1 border hover:border-2 border-black rounded-md m-2 ">
          <input
            type="password"
            placeholder="Create Password"
            className="w-full outline-none"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="m-3 flex justify-between">
          <button
            onClick={(e) => {
              e.preventDefault();
              context.signup(user, email, password);
            }}
            className="py-1 px-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
          >
            Sign Up
          </button>
          <Link className="my-2" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
