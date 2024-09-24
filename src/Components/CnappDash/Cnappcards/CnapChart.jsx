import React from "react";
import { PieChart, Pie, Tooltip, Label, Cell } from "recharts";

// Custom label component for the center of the pie chart
const CustomLabel = ({ viewBox, noOfFollowres = 0 }) => {
  const { cx, cy } = viewBox;
  return (
    <React.Fragment>
      <text x={cx - 15} y={cy - 5}>
        <tspan
          style={{
            fontWeight: 700,
            fontSize: "1.5em",
            fill: "black",
            fontFamily: "Roboto"
          }}
        >
          {noOfFollowres}
        </tspan>
      </text>
      <text x={cx - 22} y={cy + 15}>
        <tspan
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
    </React.Fragment>
  );
};

// Indicator list component to show the legend
const IndicatorList = () => {
  const items = [
    { name: "Connected", color: "blue" },
    { name: "Not connected", color: "red" }
  ];

  return (
    <div style={{ marginTop: "20px", textAlign: "left" }}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: item.color,
                borderRadius: "50%",
                marginRight: "10px"
              }}
            />
            <span className="text-sm">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main chart component
const CnapChart = () => {
  const data = [
    { name: "NotConnected", value: 2 },
    { name: "Connected", value: 4 }
  ];

  return (
    <div className="flex">
      <PieChart width={110} height={110} className="ml-11">
        <Tooltip />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={35}
          dataKey="value"
          outerRadius={55}
          fill="blue"
        >
          {data.map((entry, index) => {
            if (index === 1) {
              return <Cell key={`cell-${index}`} fill="blue" />;
            }
            return <Cell key={`cell-${index}`} fill="red" />;
          })}
          <Label
            content={<CustomLabel noOfFollowres={data[0].value} />}
            position="center"
          />
        </Pie>
      </PieChart>
      <div className="ml-10">
        <IndicatorList />
      </div>
    </div>
  );
};

export default CnapChart;
