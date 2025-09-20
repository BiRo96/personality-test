import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";



export default function PieChart({name, points}) {
    // Chart.js modulok regisztrálása
    ChartJS.register(ArcElement, Tooltip, Legend);    

    const data = {
        labels: Object.keys(points),
        datasets: [
            {
                label: {name} + " diagram",
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
        responsive: true,
        plugins: {
            legend: {
                position: "",
            },
            tooltip: {
                callbacks: {
                    label: "",
                },
            },
        },
    };

    return (
        <div style={{ margin: "0 auto" }}>
            <h2>{name} diagram</h2>
            <Pie data={data} options={options} />
        </div>
    );
}
