import React from "react";
import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart: React.FC = () => {
  const labels = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toLocaleDateString();
  }).reverse();

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgba(135, 206, 235, 0.7)", // Light blue
        backgroundColor: "rgba(135, 206, 235, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [45, 39, 60, 61, 36, 35, 20],
        borderColor: "rgba(0, 128, 0, 0.7)", // Green
        backgroundColor: "rgba(0, 128, 0, 0.5)",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Display horizontal grid lines
        },
      },
      y: {
        grid: {
          display: true, // Hide vertical grid lines
        },
        min: 20,
        max: 70,
        ticks: {
          stepSize: 10,
        },
        title: {
          display: true,
          text: "%",
          align: "end",
          padding: {
            top: 10,
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
