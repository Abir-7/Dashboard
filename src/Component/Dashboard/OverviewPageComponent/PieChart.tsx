
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Data1 {
    color:string,
    value:number
}

export const PieChart = () => {
  const data1:Data1[] = [
    { color: "red", value: 12 },
    { color: "blue", value: 40 },
    { color: "Yellow", value: 7 },
    { color: "Green", value: 15 },
    { color: "Orange", value: 13 },
  ];

  const backgroundColor = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
  ];

  const data = {
    labels: data1.map((d) => d.color + " " + d.value),
    datasets: [
      {
        label: "# of Votes",
        data: data1.map((d) => d.value),
        backgroundColor: backgroundColor,
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
    },
  };
  return (
    <>
      <div className="pie-chart-container">
       <div style={{maxWidth:'400px'}}>
       <Pie data={data} options={options} />
       </div>
        <div style={{ display: "flex", gap: "20px", flexDirection: "column" ,width:'200px',flexShrink:'0'}}>
          {data1.map((data, index) => (
            <div>
              {" "}
              <span
                style={{
                  backgroundColor: `${backgroundColor[index]}`,
                  padding: "3px 6px",
                  fontSize: "20px",
                }}
              >
                {data.color}
              </span>{" "}
              <span style={{ fontSize: "20px" }}>{data.value}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
