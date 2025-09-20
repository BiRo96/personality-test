import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";


export default function BarChart({ name, points }) {
    
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    const data = {
        labels: Object.keys(points),
        datasets: [
            {
                label: `${name} diagram`,
                data: Object.values(points),
                backgroundColor: [
                    "#0088FE", 
                    "#00C49F", 
                    "#FFBB28", 
                    "#FF8042",
                    "#A28CFE",
                    "#FE6F9E",
                    "#8CFEA1",
                    "#FEF38C",
                    "#FE8CDA"
                ],
                borderColor: "#fff",
                borderWidth: 2,
            },
        ],
    };

    const options = {
        indexAxis: "y", // horizontal bar chart
        responsive: true,
        plugins: {
            legend: {
                position: "",
            },
        },
    };

    return (
        <div style={{ margin: "0 auto" }}>
            <h2>{name} diagram</h2>
            <Bar data={data} options={options} />
        </div>
    );
}
