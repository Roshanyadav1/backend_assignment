# 🏛️ Details & Geocoding API

A production-ready backend service built with **Node.js** and **Express**, featuring a **Supabase (PostgreSQL)** database and **Reverse Geocoding** capabilities. This project follows the **MVC (Model-View-Controller)** architecture for scalability and clean separation of concerns.

[![Deployed Link](https://img.shields.io/badge/Live-Demo-brightgreen)](https://backend-assignment-jht6.onrender.com)
[![Documentation](https://img.shields.io/badge/API-Docs-blue)](https://backend-assignment-jht6.onrender.com/api-docs)

---

## 📍 Live Deployment
The project is live at: [https://backend-assignment-jht6.onrender.com/api-docs/#/](https://backend-assignment-jht6.onrender.com/api-docs/#/)
> **Note:** Access the interactive documentation at `/api-docs`.

---

## 🏗️ Folder Structure
The project is organized using a professional architecture to ensure the code is maintainable and scannable:

```text
├── config/             # Database connection (Supabase)
├── controllers/        # Request handling & business logic
├── docs/               # Swagger API documentation (JSON)
├── routes/             # API route definitions
├── services/           # External API integrations (Geocoding)
├── .env                # Environment variables (ignored by git)
├── server.js           # Main application entry point
└── README.md           # Project documentation
```
