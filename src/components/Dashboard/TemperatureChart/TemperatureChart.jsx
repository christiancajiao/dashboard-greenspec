import React, { useEffect, useRef } from "react";
import style from "./TemperatureChart.module.scss";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

const TemperatureChart = () => {
  const chartRef = useRef(null); // Reference to the canvas
  const chartInstance = useRef(null); // Reference to the Chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy existing chart instance before creating a new one
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new Chart instance
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Temp 1",
            data: [22, 24, 19, 23, 25, 20, 21],
            borderColor: "deeppink",
            backgroundColor: "transparent",
            fill: false,
            tension: 0.4, // Smooth curve
            borderWidth: 5, // Line thickness
            pointRadius: 0, // No points
          },
          {
            label: "Temp 2",
            data: [18, 21, 20, 22, 23, 19, 18],
            borderColor: "blue",
            backgroundColor: "transparent",
            fill: false,
            tension: 0.4,
            borderWidth: 5,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            position: "top",
          },
          tooltip: {
            enabled: false,
          },
        },
        scales: {
          x: {
            title: {
              display: false,
              text: "Days of the Week",
            },
          },
          y: {
            title: {
              display: false,
              text: "Temperature (°C)",
            },
            beginAtZero: false,
          },
        },
      },
    });

    // Cleanup on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className={style.chart}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default TemperatureChart;
