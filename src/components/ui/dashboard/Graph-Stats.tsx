import { Charts } from "../../shared/charts/Pie";

export const GraphStats = () => {
  const donutChartConfig = {
    series: [44, 55], // Values for the donut chart
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Male", "Female"], // Custom names for each series
      fill: {
        colors: ["#282828", "#2563EB"], // Fill colors for the slices
      },
      dataLabels: {
        enabled: true, // Enable data labels
        formatter: (val: number, opts: any) => {
          // Customize the percentage text
          return `${val.toFixed(1)}%`; // Format as a percentage
        },
        style: {
          fontSize: "16px", // Customize text size
          colors: ["#F3F4F6"], // Customize text color
        },
        dropShadow: {
          enabled: true, // Add shadow for better visibility
          top: 1,
          left: 1,
          blur: 2,
          color: "#000",
          opacity: 0.5,
        },
      },
      legend: {
        position: "right", // Customize legend position
        labels: {
          colors: "#000", // Legend text color
          useSeriesColors: false, // Disable series colors for legend text
        },
        markers: {
          width: 12,
          height: 12,
          radius: 4, // Rounded markers
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200, // Smaller chart width for smaller screens
            },
            legend: {
              position: "bottom", // Move legend to the bottom on small screens
            },
          },
        },
      ],
    } as ApexCharts.ApexOptions,
  };

  return (
    <Charts
      chartOptions={donutChartConfig.options}
      chartSeries={donutChartConfig.series}
      chartType="donut"
    />
  );
};
