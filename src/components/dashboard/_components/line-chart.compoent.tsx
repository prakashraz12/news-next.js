import React from 'react';
import ReactApexChart from 'react-apexcharts';

type WeeklyVisitorsData = {
  week: string;
  visitors: number;
};

type WeeklyVisitorsChartProps = {
  data: WeeklyVisitorsData[];
};

type SeriesData = {
  name: string;
  data: number[];
};

const WeeklyVisitorsChart: React.FC<WeeklyVisitorsChartProps> = ({ data }) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'line',
    },
    xaxis: {
      categories: data.map(item => item.week),
    },
  };

  const series: SeriesData[] = [{
    name: 'Weekly Visitors',
    data: data.map(item => item.visitors),
  }];

  return <ReactApexChart options={options} series={series} type="line" height={350} />;
};

export default WeeklyVisitorsChart;
