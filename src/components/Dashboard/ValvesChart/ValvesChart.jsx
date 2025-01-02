import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import style from "./ValvesChart.module.scss";
import valve from "../../../assets/valve.svg";
import { useData } from "../../../Hooks/useData";

const ValvesChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const { dataUser } = useData();
  const values = dataUser[0]?.valves.map((entry) => entry.value) || [];
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const icon = new Image();
    icon.src = valve;

    // Initialize the chart
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Point 1", "Point 2", "Point 3", "Point 4"],
        datasets: [
          {
            label: "Custom Line Graph",
            data: values,
            borderColor: "blue",
            borderWidth: 2,
            pointStyle: icon,
            pointRadius: 10,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
            grid: {
              display: false,
            },
          },
          y: {
            display: false,
            beginAtZero: true,
            grid: {
              drawBorder: false,
            },
          },
        },
      },
    });

    // Cleanup the chart on component unmount
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

export default ValvesChart;
