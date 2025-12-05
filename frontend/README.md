Dashboard
![alt text](<Screenshot 2025-12-05 095207.png>) 
![alt text](<Screenshot 2025-12-05 095200.png>) 
![alt text](<Screenshot 2025-12-05 095149.png>)

React Notification System (Toast + Alerts + Async Notifications)

📊 Analytics Dashboard

A React-based Analytics Dashboard that visualizes sales and user data using Chart.js with Line, Bar, and Pie charts. The dashboard fetches analytics data from a backend API and displays it in a responsive and modern interface.

🧩 Features

✅ Display Sales Overview with a Line Chart
✅ Display Users Growth with a Bar Chart
✅ Display Sales Contribution with a Pie Chart
✅ Fetch data dynamically from API using Axios
✅ Responsive layout with sidebar navigation
✅ Modern, colorful charts with Chart.js

⚡ Technologies Used

Frontend: React, Axios
Charts: Chart.js, react-chartjs-2
Styling: CSS
Backend (API): Node.js + Express (assumed from your code)
Database: MongoDB (for analytics data)


📂 Folder Structure
analytics-dashboard/
├── public/
├── src/
│   ├── components/
│   │   └── ChartCard.jsx
│   ├── pages/
│   │   └── Dashboard.jsx
│   ├── styles/
│   │   └── dashboard.css
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md

backend/
│── controllers/
│   ├── salesController.js
│── models/
│   ├── salesModel.js
│── routes/
│   ├── slaesRoutes.js
│── config/
│   ├── db.js
│── app.js
│── .env
│── package.json

🚀 Getting Started

Frontend Set up

1️⃣ Install Dependencies
cd frontend
npm run dev

Backend Setup
1️⃣ Install Dependencies
cd backend
npm init
npm run dev

2️⃣ Setup Environment File

Create .env

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key

3️⃣ Start Server
npm run dev

API Endpoint

GET http://localhost:9000/api/analytics/data
Returns analytics data in the format:

{
  "data": [
    { "month": "Jan", "sales": 1000, "users": 300 },
    { "month": "Feb", "sales": 1500, "users": 350 },
    ...
  ]
}

POST http://localhost:9000/api/analytics/create to create data
