import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Line,Bar,Pie} from "react-chartjs-2"
import ChartCard from '../components/ChartCard';
// import "../styles/charts.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
    const [analytics, setAnalytics] = useState([]);

    useEffect(() => {
    const fetchanalytics = async()=>{
    try {
        const res = await axios.get("http://localhost:9000/api/analytics/data")
        console.log(res);
        setAnalytics(res.data.data)
        
    } catch (error) {
        console.error("error fetching analytic data",error)
    }
    }
    fetchanalytics()
   
    // axios.get("http://localhost:6000/api/analytics/data")
    //   .then(res => setAnalytics(res.data.data))
    //   .catch(err => console.log(err));
  }, []);

  const months = analytics.map((i) => i.month);
  const sales = analytics.map((i) => i.sales);
  const users = analytics.map((i) => i.users);
  return (
    <div className='dashboard-layout'>
        <div className="sidebar">
            <h2>Admin Panel</h2>
            <button className="sidebar-btn">Dashboard</button>
            {/* You can add more buttons here */}
        </div>

        <div className="main-content">
            <h1>Analytics Dashboard</h1>

            <div className="chart-container">
                
                <ChartCard title="Sales Overview (Line Chart)">
                <Line
                    data={{
                    labels: months,
                    datasets: [
                        {
                            label: "Sales Amount",
                            data: sales,
                            borderColor: "#4F46E5",      // Indigo
                            backgroundColor: "rgba(79, 70, 229, 0.4)", 
                            tension: 0.3,
                            borderWidth: 2,
                            pointBackgroundColor: "#4338CA",
                            pointBorderColor: "#fff",
                        },
                    ],
                    }}
                />
                </ChartCard>

                <ChartCard title="Users Growth (Bar Chart)">
                <Bar
                    data={{
                    labels: months,
                    datasets: [
                        {
                        label: "Users",
                        data: users,
                        backgroundColor: [
                            "#0EA5E9",
                            "#22C55E",
                            "#FACC15",
                            "#F97316",
                            "#EF4444",
                            "#8B5CF6",
                            ],
                        },
                    ],
                    }}
                />
                </ChartCard>

                <ChartCard title="Sales Contribution (Pie Chart)">
                <Pie
                    data={{
                    labels: months,
                    datasets: [
                        {
                        data: sales,
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#4BC0C0",
                            "#9966FF",
                            "#FF9F40",
                            ],
                        },
                    ],
                    }}
                />
                </ChartCard>

            </div>
        </div>
      
    </div>
  )
}

export default Dashboard
