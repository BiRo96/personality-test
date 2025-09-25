import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";



export default function PieChart({name, points}) {
    // Chart.js modulok regisztrálása
    ChartJS.register(ArcElement, Tooltip, Legend);    
    
    let chartPoints = points ? {...points} : {};
    // remove minus values
    for (const [key, value] of Object.entries(points)) {
        chartPoints[key] = Math.max(0, value);
    }

    const data = {
        labels: Object.keys(chartPoints),
        datasets: [
            {
                label: name + " diagram",
                data: Object.values(chartPoints),
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
                    label: function (tooltipItem) {
                    return ``;
                    },
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
