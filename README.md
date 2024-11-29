# RollBasedAceessed
Role-Based Access Control (RBAC) with JWT Authentication
Overview
This project implements Role-Based Access Control (RBAC) with JWT Authentication using React.js for the frontend and Node.js with Express.js for the backend. Users are authenticated using JWT tokens and their access to resources is determined based on their roles (Admin, User, Moderator).

Key Features:
User Registration & Login with JWT token generation.
Role-Based Access Control (Admin, Moderator, User roles).
Protected Routes based on user roles and authentication.
Built with React.js (Frontend) and Node.js/Express.js (Backend).
Technologies Used:
Frontend: React.js, Axios, React Router.
Backend: Node.js, Express.js, JWT, Bcrypt.
Database: MongoDB.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/rbac-jwt-auth.git
cd rbac-jwt-auth
Install backend dependencies:

bash
Copy code
cd backend
npm install
Install frontend dependencies:

bash
Copy code
cd frontend
npm install
Set up .env files for the backend with MongoDB URI and JWT secret.

Run the backend:

bash
Copy code
cd backend
npm start
Run the frontend:

bash
Copy code
cd frontend
npm start
Usage
Register and Login users.
Based on roles (Admin, User, Moderator), access to different routes is granted.
JWT token is used to authenticate users for accessing protected routes.
