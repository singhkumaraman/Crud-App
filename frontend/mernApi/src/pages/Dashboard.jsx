import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserAlt,
  FaRegArrowAltCircleRight,
  FaRegFutbol,
} from "react-icons/fa";
import logo from "../assets/404.png";
const Dashboard = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-violet-700 via-indigo-300 to-violet-700 py-2 px-0 shadow-lg shadow-violet-400/60">
        <div className="flex justify-between">
          <div className="flex font-bold text-4xl px-3">
            <FaRegFutbol className="my-1 mx-1" />
            Goal Setter
          </div>
          <div className="flex">
            <FaRegArrowAltCircleRight className="my-2 mx-1" />
            <Link to="/login">
              <div className="font-semibold mx-1 my-1">Login</div>
            </Link>
            <FaUserAlt className="my-2 mx-1" />
            <Link to="/register">
              <div className="font-semibold mx-1 my-1">Register</div>
            </Link>
          </div>
        </div>
      </nav>
      <div>
        <header className="ml-[540px] m-2 mb-2 p-2 pb-4 border-b-2 border-gray-100 font-sans font-bold text-4xl">
          Login in And Set Goals...??
        </header>
        <img src={logo} className="w-50 h-50 ml-[500px]" />
      </div>
    </>
  );
};

export default Dashboard;
