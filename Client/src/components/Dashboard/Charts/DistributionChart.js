import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Rent", 11],
  ["Shopping", 2],
  ["Car", 2],
  ["Groceries", 2],
  ["Other", 7],
];

export const options = {
  title: "Spending Distribution",
  pieHole: 0.4,
  legend: 'none'
};

export default function DistributionChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"300px"}
    />
  );
}