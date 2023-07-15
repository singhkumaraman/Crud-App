import React from "react";

const ListItem = ({ text, handleClick }) => {
  return (
    <>
      <li className="list-outside m-2 mb-2 p-2 pb-4  border-gray-100 font-sans">
        <div className="flex justify-between gap-2 flex-sp">
          <div className="font-semibold text-xl mx-1">● {text}</div>
          <div className=" flex  justify-center  ">
            <button
              className="cursor-pointer text-white bg-red-500 rounded-xl  px-3 py-1 "
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default ListItem;
