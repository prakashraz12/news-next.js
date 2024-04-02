'use client';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface MonthlyData {
  month: string;
  uploads: number;
}

interface Props {
  monthlyData: MonthlyData[];
}

const NewsUploadChart: React.FC<Props> = ({ monthlyData }) => {
  const months = monthlyData.map(data => data.month);
  const uploads = monthlyData.map(data => data.uploads);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: months,
    },
    yaxis: {
      title: {
        text: 'Number of Uploads'
      }
    },
  
  };

  return (
    <ReactApexChart options={options} series={[{ data: uploads }]} type="bar" height={350} />
  );
};

export default NewsUploadChart;
