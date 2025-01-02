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
import { useData } from "../../../Hooks/useData";

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
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const { dataUser } = useData();

  const temperature =
    dataUser[0]?.climateOverview.map((entry) => entry.temperature) || [];
  const lightIntensity =
    dataUser[0]?.climateOverview.map((entry) => entry.lightIntensity) || [];

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
            label: "Temperature",
            data: temperature,
            borderColor: "deeppink",
            backgroundColor: "transparent",
            fill: false,
            tension: 0.4,
            borderWidth: 5,
            pointRadius: 0,
          },
          {
            label: "Light Intensity",
            data: lightIntensity,
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
            display: true,
            position: "top",
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
              text: "Value",
            },
            beginAtZero: false,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [dataUser]);

  return (
    <div className={style.chart}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default TemperatureChart;
