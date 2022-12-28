import React from 'react'
import { Chart } from "react-google-charts";

export default function SpendingsChart() {
  const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];
  
  const options = {
    chart: {
      title: "Spending History",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
      legend: 'none',
    },
  };

  return (
    <Chart
      chartType="Bar"
      data={data}
      options={options}
    />
  )
}
