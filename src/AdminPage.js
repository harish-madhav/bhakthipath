import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPendingSongs, approveSong } from './actions/songActions';
import { Link } from 'react-router-dom';

export default function AdminPage() {
    const dispatch = useDispatch();
    const pendingSongs = useSelector(state => state.songs.pendingSongs);

    useEffect(() => {
        dispatch(fetchPendingSongs());
    }, [dispatch]);

    const handleApprove = (id) => {
        dispatch(approveSong(id)).then(() => dispatch(fetchPendingSongs()));
    };

    return (
        <div className="container-fluid bg-light min-vh-100">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <span className="navbar-brand">Admin Dashboard</span>
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/dashboard">User View</Link>
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </div>
                </div>
            </nav>

            <div className="container py-4">
                <h3 className="mb-3">Pending Song Approvals</h3>
                {pendingSongs.length === 0 ? (
                    <div className="alert alert-info">No pending songs.</div>
                ) : (
                    <div className="row g-3">
                        {pendingSongs.map(song => (
                            <div key={song._id} className="col-lg-6">
                                <div className="card shadow-sm h-100">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                            <h5 className="card-title mb-0">{song.title}</h5>
                                            <span className="badge bg-secondary">{song.god}</span>
                                        </div>
                                        <small className="text-muted">Submitted by {song.uploader}</small>
                                        <pre className="mt-3" style={{ whiteSpace: 'pre-wrap' }}>{song.lyrics}</pre>
                                        <div className="d-flex justify-content-end">
                                            <button className="btn btn-success" onClick={() => handleApprove(song._id)}>Approve</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
