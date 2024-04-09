import * as React from "react";
import { PieChart } from "react-minimal-pie-chart";

const data = [
  { label: "Group A", value: 50, color: "#C133FF" },
  { label: "Group B", value: 50, color: "#33AFFF" },
  { label: "Group C", value: 300, color: "#337DFF" },
  { label: "Group D", value: 50, color: "#FF4233" },
  { label: "Group E", value: 50, color: "#33FFEC" },
  { label: "Group F", value: 500, color: "#000000" },
];

// const sizing = {
//   margin: { right: 10 },
//   width: 400,
//   height: 400,
//   legend: { hidden: true },
// };
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

export function PieChartWithCustomizedLabel() {
  const [outerRadius, setOuterRadius] = React.useState(200);
  const [width, setWidth] = React.useState(400);
  const [height, setHeight] = React.useState(400);

  React.useEffect(() => {
    // Check if the device width is smaller than a certain threshold (e.g., 600px)
    const handleResize = () => {
      const isMobile = window.innerWidth < 500; // You can adjust this threshold as needed
      setOuterRadius(isMobile ? 100 : 200);
      setWidth(isMobile ? 300 : 400);
      setHeight(isMobile ? 300 : 400); // Set smaller radius for mobile devices
    };

    // Initial call to handleResize
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sizing = {
    margin: { right: 10 },
    width,
    height,
    legend: { hidden: true },
  };
  return (
    <PieChart
      data={data.map(({ value, color }, index) => ({
        value,
        color,
        key: index,
        title: `${((value / TOTAL) * 100).toFixed(0)}`, // Display percentage as title
      }))}
      label={({ dataEntry }) => dataEntry.title} // Use title as label
      labelStyle={{
        fontSize: "5px",
        fontFamily: "sans-serif",
        fill: "white",
      }}
      startAngle={-90}
    />
  );
}

// export default PieChartWithCustomizedLabel;
