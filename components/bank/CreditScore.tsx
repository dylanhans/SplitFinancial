import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Importing 'chart.js/auto' to get the latest version

interface LineChartProps {
  labels: string[];
  data: number[];
  label: string;
  borderColor?: string;
  tension?: number;
}

const LineChart: React.FC<LineChartProps> = ({
  labels,
  data,
  label,
  borderColor = '#1E3A8A',
  tension = 0.1,
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null); // To store the chart instance

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        // If chart instance already exists, destroy it
        chartInstance.current.destroy();
      }
      
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: label,
              data: data,
              fill: false,
              borderColor: borderColor,
              tension: tension,
            }],
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
                display: false, // Hide x axis
              },
              y: {
                display: false, // Hide y axis
              },
            },
            elements: {
              point: {
                radius: 0, // Hide points on the line
              },
            },
          },
        });
      }
    }

    return () => {
      // Clean up function to destroy the chart instance
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [labels, data, label, borderColor, tension]);

  return (
    <div style={{ width: '90%', height: '100px' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default LineChart;
