## 🎯 Goal Setter:-

- A MERN stack application built to help users set goals, track their progress, edit, and delete them with ease.
- The main purpose of this project is to understand and implement a complete MERN stack workflow, including authentication, authorization, token handling, and clean code organization.

## 🚀 Features

- ✅ User authentication & authorization  
- ✅ Token handling with **cookies (res.cookies)** — secure and modern approach  
- ✅ Centralized API handling with credentials support in frontend  
- ✅ Well-structured backend folder organization  
- ✅ Goal management: Create, Edit, Delete, Track progress  
- ✅ Type-safe frontend with **TypeScript**  
- ✅ Form validation using **React Hook Form + Zod**  
- ✅ API handling with **React Query**  


## 🛠️ Tech Stack:-

Frontend
- ⚡ Vite – Modern build tool
- ⚛️ React 19 – UI development
- 📦 React Query – API handling
- 🛡️ TypeScript – Type safety
- ✅ React Hook Form + Zod – Form validation

Backend
- 🟢 Node.js – Runtime environment
- 🚏 Express.js – Server framework
- 🍃 MongoDB (NoSQL) – Database
- 🔑 JWT + Cookies – Authentication

## 📂 Project Structure

```
Goal-Setter/
│── backend/           # Express + MongoDB backend
│   ├── config/        # DB connection & environment setup
│   ├── controllers/   # Route logic
│   ├── middleware/    # Auth & error handling
│   ├── models/        # MongoDB models
│   ├── routes/        # API routes
│   └── server.js      # Entry point
│
│── client/            # React frontend
│   ├── src/
│   │   ├── api/       # Centralized API handling (Axios/React Query)
│   │   ├── components/# UI components
│   │   ├── context/   # Global state / Auth context
│   │   ├── pages/     # App pages
│   │   └── types/     # TypeScript types
│   └── vite.config.ts # Vite config
│
└── README.md
```
## ⚙️ Installation & Setup

1️⃣ Clone the repository
git clone https://github.com/amgowda42/Goal_Setter.git

2️⃣ Backend Setup
```
cd backend
npm install
```

Create a .env file inside the backend/ folder and add:
```
MONGODB_URI=your_mongodb_connection_string
PORT=8000
JWT_SECRET=your_secret_key
```

Start backend:
```
npm run dev
```

3️⃣ Frontend Setup
```
cd client
npm install
```

Start frontend:
```
npm run dev
```

## ▶️ Usage

- Register/Login as a user.
- Set your goals (title, description, etc.).
- Track progress, edit, or delete goals anytime.
- Authentication is handled securely using cookies.

## 🎯 Learning Outcomes

- Through this project, I focused on:
- Building a full-stack MERN app with modern best practices.
- Implementing authentication/authorization using JWT + cookies.
- Organizing backend with a clean folder structure.
- Using React Query for centralized API handling.
- Adding type safety & validation in frontend with TypeScript + Zod.

## 📜 License

- This project is licensed under the MIT License.

