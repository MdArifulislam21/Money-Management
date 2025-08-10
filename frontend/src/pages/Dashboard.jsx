import React from 'react'
import DashboardNav from './DashboardNav.jsx';
import { useSelector, useDispatch } from "react-redux";
import { setActiveStatus } from "../reduxPages/activeStatusSlice";
import Income from './Income.jsx';
import Expense from './Expense.jsx';
import Budget from './Budget.jsx';
import Report from './Report.jsx';
// import Defaults from './Defaults.jsx';

export default function Dashboard() {
  const dispatch = useDispatch();
  const activeStatus = useSelector((state) => state.activeStatus.value);
  console.log("activeStatus", activeStatus);
  const renderActiveComponent = () => {
    switch (activeStatus) {
      case 'Report':
        return <Report />;
      case 'Income':
        return <Income />;
      case 'Expense':
        return <Expense />;
      case 'Budget':
        return <Budget />;
      

      default: // Fallback to Report if no match
        return <Report />;
    } 
    
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        {renderActiveComponent()}
      </div>
    </div>
  );
}
