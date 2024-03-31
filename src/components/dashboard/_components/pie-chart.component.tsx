'use client';

import React from 'react';
import ReactApexChart from 'react-apexcharts';

// Define the type for each data item
type NewsCategoryData = {
    category: string;
    count: number;
  };
  


type PieChartProps = {
  data: NewsCategoryData[];
};

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'pie',
    },
    labels: data.map(item => item.category),
  };

  const series: number[] = data.map(item => item.count);

  return (
    <ReactApexChart options={options} series={series} type="pie" height={200}  />
  );
};

export default PieChart;
