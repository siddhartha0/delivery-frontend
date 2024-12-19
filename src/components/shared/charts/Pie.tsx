import ReactApexChart from "react-apexcharts";
import { ErrorBoundary } from "../../helper";

interface ApexChartProps {
  chartType: "line" | "area" | "bar" | "donut" | "radar" | "pie" | "scatter"; // Add more as needed
  chartOptions: ApexCharts.ApexOptions;
  chartSeries: ApexAxisChartSeries | ApexNonAxisChartSeries;
  width?: string | number;
  height?: string | number;
}

export const Charts = ({
  chartType,
  chartOptions,
  chartSeries,
  width,
  height,
}: ApexChartProps) => {
  return (
    <ErrorBoundary>
      <div id="chart">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type={chartType}
          height={height}
          width={width}
        />
      </div>
    </ErrorBoundary>
  );
};
