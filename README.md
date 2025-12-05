# 📊 React Analytics Dashboard

<img width="1919" height="971" alt="Screenshot 2025-12-05 095207" src="https://github.com/user-attachments/assets/1a93acf5-a787-483e-b0f0-4ef489d5198b" />

<img width="1096" height="597" alt="Screenshot 2025-12-05 095200" src="https://github.com/user-attachments/assets/428c76e3-4619-4495-8fa6-2d95947d90b9" />

<img width="566" height="594" alt="Screenshot 2025-12-05 095149" src="https://github.com/user-attachments/assets/8508a7de-2064-46c6-93ec-946820ae0742" />


A **React-based Analytics Dashboard** that visualizes sales and user data using **Chart.js** with Line, Bar, and Pie charts. The dashboard fetches analytics data from a backend API and displays it in a responsive and modern interface.

---

## 🧩 Features

- ✅ Display Sales Overview with a **Line Chart**  
- ✅ Display Users Growth with a **Bar Chart**  
- ✅ Display Sales Contribution with a **Pie Chart**  
- ✅ Fetch data dynamically from API using **Axios**  
- ✅ Responsive layout with sidebar navigation  
- ✅ Modern, colorful charts with **Chart.js**

---

## ⚡ Technologies Used

- **Frontend:** React, Axios  
- **Charts:** Chart.js, react-chartjs-2  
- **Styling:** CSS  
- **Backend (API):** Node.js + Express  
- **Database:** MongoDB (for analytics data)  

---

## 📂 Folder Structure

### Frontend
```
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
```

### Backend
```
backend/
├── src/
│   ├── controllers/
│   │   └── salesController.js
│   ├── models/
│   │   └── salesModel.js
│   ├── routes/
│   │   └── salesRoutes.js
│   ├── config/
│   │   └── db.js
│   └── app.js
├── .env           # Environment variables (excluded from version control)
└── package.json   # Node.js dependencies & scripts
```

---

## 🚀 Getting Started

### Frontend Setup

1️⃣ Install Dependencies
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

1️⃣ Install Dependencies
```bash
cd backend
npm install
```

2️⃣ Setup Environment File

Create a `.env` file in the backend root:
```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

3️⃣ Start Server
```bash
npm run dev
```

---

## 🔗 API Endpoints

- **GET Analytics Data**
```http
GET http://localhost:5000/api/analytics/data
```
Returns analytics data in the format:
```json
{
  "data": [
    { "month": "Jan", "sales": 1000, "users": 300 },
    { "month": "Feb", "sales": 1500, "users": 350 }
  ]
}
```

- **POST Create Analytics Data**
```http
POST http://localhost:5000/api/analytics/create
```
Request body example:
```json
{
  "month": "Mar",
  "sales": 2000,
  "users": 400
}
```

---

## 🎯 Notes

- Ensure MongoDB is running locally or provide a valid connection string in `.env`.  
- Frontend uses **Axios** to fetch data dynamically from the backend.  
- The dashboard is fully responsive and works on desktop and mobile devices.

