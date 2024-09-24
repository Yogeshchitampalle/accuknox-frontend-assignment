import React from "react";
import { PieChart, Pie, Cell, Tooltip, Label } from "recharts";

// Custom label component for the center of the pie chart
const CustomLabel = ({ viewBox, data }) => {
  const { cx, cy } = viewBox;
  const total = data.reduce((acc, entry) => acc + entry.value, 0);

  return (
    <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
      <tspan
        style={{
          fontWeight: 700,
          fontSize: "1.5em",
          fill: "black",
          fontFamily: "Roboto"
        }}
      >
        {total}
      </tspan>
      <tspan
        x={cx}
        dy="1.2em"
        style={{
          fontSize: "1rem",
          fill: "black",
          fontFamily: 'initial',
          fontWeight: 'bold',
        }}
      >
        Total
      </tspan>
    </text>
  );
};

// Indicator list component to show the legend
const IndicatorList = () => {
  const items = [
    { name: "Passed", value: 7253, color: "#28a745" },   // Green
    { name: "Failed", value: 1889, color: "#dc3545" },     // Red
    { name: "Warning", value: 681, color: "#ffc107" },   // Yellow
    { name: "Not Available", value: 36, color: "#6c757d" } // Gray
  ];

  return (
    <div style={{ marginTop: "2px", textAlign: "left" }}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "2.5px" }}>
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: item.color,
                borderRadius: "50%",
                marginRight: "10px"
              }}
            />
            <span className="text-sm">
              {item.name} ({item.value})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Data for the pie chart
const data = [
  { name: "Passed", value: 7253 },
  { name: "Failed", value: 1889 },
  { name: "Warning", value: 681 },
  { name: "Not Available", value: 36 },
];

// Colors for the pie chart segments
const COLORS = ["green", "red", "yellow", "gray"];

// Main chart component
const RiskChart = () => {
  return (
    <div className="flex">
      <PieChart width={110} height={110} className="ml-3">
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={35}
          outerRadius={55}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label
            content={<CustomLabel data={data} />}
            position="center"
          />
        </Pie>
        <Tooltip />
      </PieChart>
      <div className="ml-11">
        <IndicatorList />
      </div>
    </div>
  );
};

export default RiskChart;
