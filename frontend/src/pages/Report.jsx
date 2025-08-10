import React, { useState, useEffect } from 'react';
import BugetExpenseReport from './BudgetExpenseReport.jsx';
import ChartComponent from './ChartComponent.jsx';
import axios from "axios";

const Report = () => {
  const [reportStatus, setReportStatus] = useState("Month");
  const [monthsReportData, setMonthsReportData] = useState([]);
  const [yearsReportData, setYearsReportData] = useState([]);
   
  const fetchData = async () => {
    try {
        const token = localStorage.getItem("access_token");
        const response = await axios.get(
        "http://127.0.0.1:8000/api/month-income-expensez/",
        {
            headers: {
            Authorization: `Bearer ${token}`, // Send token here
            },
        }
        );

        setMonthsReportData(response.data);
        console.log("Data fetched successfully:", response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    };

    useEffect(() => {
    console.log("Fetching data for Report component");
    fetchData();
    }, []);


  return (
    <div className='container'>
      <div className='flex items-start gap-4 justify-center min-h-6xl'>
        <button
          onClick={() => setReportStatus('Month')}
          className={`rounded-lg px-8 py-4 mt-4 text-white text-lg font-semibold ${reportStatus === 'Month'? "bg-blue-600":"bg-blue-400"}`} 
        >
          Month
        </button>
        <button
          onClick={() => setReportStatus('Year')}
          className={`rounded-lg px-8 py-4 mt-4 text-white text-lg font-semibold ${reportStatus === 'Year'? "bg-blue-600":"bg-blue-400"}`} >
          Year
        </button>   
      </div>

      {reportStatus === 'Month' && (
        < BugetExpenseReport  data = { monthsReportData }/>
      )}

      {reportStatus === 'Year' && (
        < BugetExpenseReport  data = {monthsReportData}/>
      )}
       {monthsReportData && <div className='flex items-center justify-center mt-10'>
            <ChartComponent  apiData = {monthsReportData}/>
        </div>}
    </div>
  );
};

export default Report;
