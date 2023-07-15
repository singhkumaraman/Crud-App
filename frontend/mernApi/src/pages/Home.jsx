import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { Link, useNavigate } from "react-router-dom";
import ListItem from "../Components/ListItem";
import HomeHeader from "../Components/HomeHeader";
const Home = () => {
  const nav = useNavigate();
  const [flag, setFlag] = useState(false);
  const [text, setText] = useState("");
  const context = useContext(GlobalContext);
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    getGoals();
  }, [context.token, goals]);
  // READ...
  const getGoals = async () => {
    const response = await fetch("http://localhost:5001/api/goals/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${context.token}`,
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      setGoals(data);
    }
  };
  // CREATE..
  const creatGoal = async () => {
    if (text === "") {
      alert("Please Enter Something");
      return;
    }
    const response = await fetch("http://localhost:5001/api/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${String(context.token)}`,
      },
      body: JSON.stringify({ text: text }),
    });
  };
  // DELETE
  const deleteGoal = async () => {
    const response = await fetch(
      "http://localhost:5001/api/goals" + `/${context.user_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${context.token}`,
        },
      }
    );
  };
  return (
    <>
      <HomeHeader />
      <div className="p-4 flex-grow bg-gray-900">
        <header className="text-center text-3xl font-semibold text-primary-700">
          {context.user.toUpperCase()}'s Goals List
        </header>
        <div className="flex justify-center gap-4 m-6">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="bg-gray-50 border rounded-lg"
            placeholder=" add task"
          />

          <button
            className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={() => {
              creatGoal();
            }}
          >
            Add Goal
          </button>
        </div>
        <div className="w-1/2 m-auto border rounded-xl bg-slate-50 ">
          <ul>
            {goals.map((i, index) => {
              return (
                <ListItem
                  text={i.text}
                  key={index}
                  handleClick={deleteGoal}
                  onClick={() => {}}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
