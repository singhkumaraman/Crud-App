import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { Link } from "react-router-dom";
import {
  FaUserAlt,
  FaRegArrowAltCircleRight,
  FaRegFutbol,
} from "react-icons/fa";
const Home = () => {
  const [flag, setFlag] = useState(false);
  const [text, setText] = useState("");
  const context = useContext(GlobalContext);
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    getGoals();
  }, [context.token]);
  const getGoals = async () => {
    const response = await fetch("http://localhost:5000/api/goals/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${String(context.token)}`,
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      setGoals(data);
    }
  };

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
            <Link
              to="/login"
              onClick={() => {
                context.logout();
              }}
            >
              <div className="font-semibold mx-3 my-1">Logout</div>
            </Link>
          </div>
        </div>
      </nav>
      <div>
        <div>
          <header className="ml-[540px] m-2 mb-2 p-2 pb-4 border-b-2 border-gray-100 font-sans font-bold text-4xl">
            {context.user.toUpperCase()}'s Goals Dashboard
          </header>
          <ul>
            {goals.map((i, index) => {
              return (
                <li
                  className="list-outside m-2 mb-2 p-2 pb-4 border-b-2 border-gray-100 font-sans"
                  key={index}
                >
                  <div className="flex justify-between">
                    <div className="font-semibold text-xl mx-1">● {i.text}</div>
                    <div className=" flex  justify-center hover:text-white hover:bg-red-500/95 rounded-full h-7 w-7 mx-1">
                      <button className="cursor-pointer">x</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {flag ? (
          <div className="mx-5 flex flex-col ">
            <textarea
              name="text"
              value={text}
              onChange={() => {
                e.preventDefault();
                setText(e.target.value);
              }}
            ></textarea>
            <button
              className="bg-gradient-to-r w-2/12 from-violet-500 to-violet-400 hover:from-violet-600 hover:to-violet-400  px-9 py-1 mt-3 rounded-sm text-white font-mono font-bold  shadow-md shadow-violet-400/60 opacity-100 "
              onClick={() => {
                setFlag(false);
              }}
            >
              Add Goal
            </button>
          </div>
        ) : (
          <div>
            <button
              className="bg-gradient-to-r from-violet-500 to-violet-400 hover:from-violet-600 hover:to-violet-400  px-9 py-1 mt-3 rounded-sm text-white font-mono font-bold  shadow-md shadow-violet-400/60 opacity-100 mx-5"
              onClick={() => {
                setFlag(true);
              }}
            >
              Add Goal
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
