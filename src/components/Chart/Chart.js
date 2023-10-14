import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
    const dataPointValues = props.dataValues.map(dataValue => dataValue.value)
    const totalMaximum = Math.max(...dataPointValues)

  return (
    <div className="chart">
      {props.dataValues.map((dataValue) => (
        <ChartBar
          key={dataValue.label}
          value={dataValue.value}
          maxValue={totalMaximum}
          label={dataValue.label}
        />
      ))}
    </div>
  );
}
