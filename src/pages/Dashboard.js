import React from 'react';
import { Link } from 'react-router-dom';
import { gods } from '../data/mockData';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const user = useSelector(state => state.auth.user);
  return (
    <div className="container-fluid bg-light min-vh-100">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/dashboard">
            🕉️ BhaktiPath
          </Link>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-5">
        {/* Upload CTA for logged-in users */}
        {user && (
          <div className="row mb-5">
            <div className="col-12">
              <div className="alert alert-success d-flex justify-content-between align-items-center">
                <div>
                  <strong>Have lyrics to share?</strong> Submit them for admin approval.
                </div>
                <Link to="/upload" className="btn btn-sm btn-success">Upload Lyrics</Link>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="display-4 text-primary">Choose Your Deity</h1>
            <p className="lead text-muted">Select a deity to explore their devotional songs</p>
          </div>
        </div>

        <div className="row g-4">
          {gods.map((god) => (
            <div key={god.id} className="col-lg-4 col-md-6">
              <Link
                to={`/god/${god.name.toLowerCase()}`}
                className="text-decoration-none"
              >
                <div className="card h-100 shadow-sm hover-card">
                  <div className="card-body text-center p-4">
                    <div className="display-1 mb-3">{god.emoji}</div>
                    <h3 className="card-title text-primary mb-3">{god.name}</h3>
                    <p className="card-text text-muted">{god.description}</p>
                    <div className="mt-auto">
                      <span className="badge bg-primary">Explore Songs</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card bg-primary text-white">
              <div className="card-body text-center">
                <h5 className="card-title">Welcome to BhaktiPath</h5>
                <p className="card-text">
                  Immerse yourself in the divine melodies and sacred chants of Hindu deities.
                  Each deity offers unique devotional songs that connect you to the spiritual realm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-card {
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </div>
  );
}
