import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveStatus } from "../reduxPages/activeStatusSlice";

export default function DashboardNav() {
  const dispatch = useDispatch();
  const activeStatus = useSelector((state) => state.activeStatus.value);

  const buttons = [

    {
      label: "Report",
      color: "text-blue-500 hover:text-blue-700",
      activeColor: "bg-blue-500 text-white",
    },
    {
      label: "Income",
      color: "text-green-500 hover:text-green-600",
      activeColor: "bg-green-500 text-white",
    },
    {
      label: "Expense",
      color: "text-red-500 hover:text-red-600",
      activeColor: "bg-red-500 text-white",
    },
    {
      label: "Budget",
      color: "text-blue-500 hover:text-blue-600",
      activeColor: "bg-blue-500 text-white",
    },
    
  ];

  return (
    <div className=" bg-gray-200 flex items-center w-full justify-center">
      <div className="ml-50 mx-2 sm:mx-4 grid grid-cols-4  gap-6 w-full max-w-screen">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={` font-normal sm:font-semibold py-4 px-2 rounded-lg  transition transform hover:-translate-y-1
              ${activeStatus === btn.label ? btn.activeColor : btn.color}
            `}
            onClick={() => dispatch(setActiveStatus(btn.label))}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}