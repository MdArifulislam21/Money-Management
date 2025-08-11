import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const IncomeExpenseChart = ({apiData}) => {
//   const apiData = {
//     expenses: [
//       { amount: 1000, date: "2025-08-08" },
//       { amount: 24000, date: "2025-08-09" },
//     ],
//     incomes: [
//       { amount: 100000, date: "2025-08-08" },
//       { amount: 500000, date: "2025-08-09" },
//       { amount: 100000, date: "2025-08-10" },
//     ],
//   };
    console.log("API Data: expenses", apiData.expenses);
    console.log("API Data: incomes", apiData.incomes);

  if (!apiData || !apiData.expenses || !apiData.incomes) {
    return <div>first You have to set your bugdet and add income and expense data!</div>;
  }
  const allDates = Array.from(
    new Set([...apiData.expenses.map(e => e.date), ...apiData.incomes.map(i => i.date)])
  ).sort();

  const expenseData = allDates.map(date => {
    const found = apiData.expenses.find(e => e.date === date);
    return found ? found.amount : 0;
  });

  const incomeData = allDates.map(date => {
    const found = apiData.incomes.find(i => i.date === date);
    return found ? found.amount : 0;
  });

  const data = {
    labels: allDates,
    datasets: [
      {
        label: "Expense",
        data: expenseData,
        borderColor: "rgb(239, 68, 68)",
        backgroundColor: "rgba(239, 68, 68, 0.4)",
        borderWidth: 3,
        pointRadius: 5,
      },
      {
        label: "Income",
        data: incomeData,
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "rgba(34, 197, 94, 0.4)",
        borderWidth: 3,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // allow custom height/width
    plugins: {
      legend: {
        position: "top",
        labels: { font: { size: 14 } },
      },
      title: {
        display: true,
        text: "Income vs Expense by Date",
        font: { size: 20 },
      },
    },
    scales: {
      x: {
        ticks: { font: { size: 14 } },
      },
      y: {
        ticks: { font: { size: 14 } },
      },
    },
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div style={{ height: "500px", width: "100%" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default IncomeExpenseChart;
