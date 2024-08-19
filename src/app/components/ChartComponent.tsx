'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const ChartComponents = () => {
  const [options1, setOptions1] = useState<ApexOptions | null>(null);
  const [options2, setOptions2] = useState<ApexOptions | null>(null);
  const [options3, setOptions3] = useState<ApexOptions | null>(null);
  const [series1, setSeries1] = useState<any[]>([]);
  const [series2, setSeries2] = useState<any[]>([]);
  const [series3, setSeries3] = useState<any[]>([]);

  useEffect(() => {
    setOptions2({
      chart: {
        id: 'chart2',
        group: 'sync-charts',
        type: 'line',
        height: 160,
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      colors: ['#546E7A'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      }
    });

    setSeries2([{
      name: 'Series 2',
      data: [2000, 3000, 4000, 2000, 4500, 5500, 2000, 5000, 4000, 6000, 3000, 1000]
    }]);


    setOptions1({
      chart: {
        id: 'chart1',
        group: 'sync-charts',
        type: 'area',
        height: 160,
        toolbar: {
          show: false 
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      colors: ['#51087E'],
      dataLabels: {
        enabled: false 
      },
      legend: {
        show: false 
      }
    });

    setSeries1([{
      name: 'Series 1',
      data: [9500, 9600, 9000, 8500, 8000, 7600, 7200, 7000, 6800, 6500, 6200, 6000]
    }]);


    setOptions3({
      chart: {
        id: 'chart3',
        group: 'sync-charts',
        type: 'bar',
        height: 160,
        toolbar: {
          show: false 
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      },
      colors: ['#FF5733'],
      dataLabels: {
        enabled: false 
      },
      legend: {
        show: false
      }
    });

    setSeries3([{
      name: 'Series 3',
      data: [600, 350, 100]
    }]);

  }, []);

  if (!options1 || !options2 || !options3 || !series1.length || !series2.length || !series3.length) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '50%', height: '160px', margin: '15px auto' }}>
        <ApexCharts options={options2} series={series2} type="line" height={160} />
      </div>
      <div style={{ width: '50%', height: '160px', margin: '15px auto' }}>
        <ApexCharts options={options3} series={series3} type="bar" height={160} />
      </div>
      <div style={{ width: '50%', height: '160px', margin: '15px auto' }}>
        <ApexCharts options={options1} series={series1} type="area" height={160} />
      </div>
    </div>
  );
};

export default ChartComponents;
