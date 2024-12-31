import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import style from "./ValvesChart.module.scss";
import valve from "../../../assets/valve.svg";

const ValvesChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Icon to use at each point
    const icon = new Image();
    icon.src = valve; // Replace with your icon URL

    // Initialize the chart
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Point 1", "Point 2", "Point 3", "Point 4"], // Labels for the X-axis
        datasets: [
          {
            label: "Custom Line Graph",
            data: [10, 20, 15, 25], // Data points
            borderColor: "blue",
            borderWidth: 2,
            pointStyle: icon, // Use icon as the point style
            pointRadius: 10, // Size of the icon
            tension: 0.4, // Smooth lines
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false, // Hide legend
          },
        },
        scales: {
          x: {
            display: false,
            grid: {
              display: false, // Remove grid lines
            },
          },
          y: {
            display: false,
            beginAtZero: true,
            grid: {
              drawBorder: false, // Remove border on Y-axis
            },
          },
        },
      },
    });

    // Cleanup the chart on component unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className={style.chart}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ValvesChart;
