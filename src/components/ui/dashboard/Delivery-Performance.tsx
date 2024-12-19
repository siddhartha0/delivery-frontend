import { Charts } from "../../shared/charts/Pie";

export const DeliveryPerformance = () => {
  const donutChartConfig = {
    series: [
      {
        name: "Order Entried",
        data: [10, 8, 12, 15, 20, 1, 10, 12, 14],
      },
      {
        name: "Order Delivered",
        data: [14, 10, 15, 20, 25, 5, 12, 14, 18],
      },
    ], // Values for the donut chart
    options: {
      chart: {
        events: {
          events: {
            events: {},
          },
        },
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Balance Summary",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        // categories: overallSelected ? this.value.label : label,
      },
    } as ApexCharts.ApexOptions,
  };

  return (
    <Charts
      chartOptions={donutChartConfig.options}
      chartSeries={donutChartConfig.series}
      chartType="line"
      height={333}
      width={520}
    />
  );
};
