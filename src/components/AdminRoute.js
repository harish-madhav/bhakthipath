import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AdminRoute({ children }) {
    const user = useSelector(state => state.auth.user);
    const isAdmin = useSelector(state => state.auth.isAdmin);

    if (!user) return <Navigate to="/login" />;
    return isAdmin ? children : <Navigate to="/dashboard" />;
}


