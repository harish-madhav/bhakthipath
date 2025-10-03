import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/dashboard">
            🕉️ BhaktiPath
          </Link>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div className="display-1 text-primary mb-3">👤</div>
                  <h2 className="card-title">User Profile</h2>
                </div>

                <div className="mb-4">
                  <h5>Account Information</h5>
                  <hr />
                  <div className="mb-3">
                    <label className="form-label fw-bold">Email Address:</label>
                    <p className="form-control-plaintext bg-light p-2 rounded">
                      {currentUser?.email}
                    </p>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label fw-bold">User ID:</label>
                    <p className="form-control-plaintext bg-light p-2 rounded text-muted small">
                      {currentUser?.uid}
                    </p>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Account Status:</label>
                    <p className="form-control-plaintext bg-light p-2 rounded">
                      <span className="badge bg-success">Active</span>
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h5>App Information</h5>
                  <hr />
                  <div className="row text-center">
                    <div className="col-6">
                      <div className="p-3 bg-primary text-white rounded">
                        <h4 className="mb-0">6</h4>
                        <small>Deities</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="p-3 bg-success text-white rounded">
                        <h4 className="mb-0">8</h4>
                        <small>Devotional Songs</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <Link to="/dashboard" className="btn btn-primary">
                    Back to Dashboard
                  </Link>
                  
                  <button 
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                  >
                    🚪 Sign Out
                  </button>
                </div>

                <div className="text-center mt-4">
                  <small className="text-muted">
                    Thank you for using BhaktiPath for your spiritual journey
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
