import React from 'react';
import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const AdminRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if (!token) return <Navigate to="/login" />;
    const { role } = jwt_decode(token);
    return role === 'Admin' ? children : <Navigate to="/dashboard" />;
};

export default AdminRoute;
