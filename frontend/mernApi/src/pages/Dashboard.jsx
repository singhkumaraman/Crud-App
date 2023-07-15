import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import {
  FaUserAlt,
  FaRegArrowAltCircleRight,
  FaRegFutbol,
} from "react-icons/fa";
import logo from "../assets/404.png";
const Dashboard = () => {
  return (
    <>
      <Header />
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              A simple notes app
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Do make sure that your tasks are written down all in one place so
              you don't forget anything important. And by prioritizing tasks,
              you plan the order in which you'll do them, so that you can tell
              what needs your immediate attention, and what you can leave until
              later.
            </p>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={logo} alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
