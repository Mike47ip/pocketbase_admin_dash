import React from "react";
import ReactApexChart from "react-apexcharts";

const Graph = () => {
  // Define chart options
  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    }
  };

  // Define chart series data
  const series = [
    {
      name: "Series 1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }
  ];

  return (
    <div>
      <h2>Sample Graph</h2>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default Graph;
