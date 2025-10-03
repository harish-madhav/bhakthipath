import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs } from '../actions/songActions';
import { getGodByName } from '../data/mockData';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GodSongs() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const songs = useSelector(state => state.songs.songs);
  const god = getGodByName(name);

  useEffect(() => {
    dispatch(fetchSongs(name));
  }, [dispatch, name]);

  if (!god) {
    return (
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="text-danger">Deity not found</h1>
          <Link to="/dashboard" className="btn btn-primary">Back to Dashboard</Link>
        </div>
      </div>
    );
  }

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
            <Link className="nav-link" to="/profile">Profile</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-5">
        {/* God Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="display-1 mb-3">{god.emoji}</div>
            <h1 className="display-4 text-primary">{god.name}</h1>
            <p className="lead text-muted">{god.description}</p>
          </div>
        </div>

        {/* Songs List */}
        <div className="row">
          <div className="col-12">
            <h3 className="mb-4">Devotional Songs</h3>
            {songs.length === 0 ? (
              <div className="alert alert-info">
                <h5>No songs available</h5>
                <p>Sorry, there are no songs available for {god.name} at the moment.</p>
              </div>
            ) : (
              <div className="row g-4">
                {songs.map((song) => (
                  <div key={song._id || song.id} className="col-lg-6">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title text-primary mb-3">{song.title}</h5>

                        <div className="mb-3">
                          <h6>Lyrics:</h6>
                          <div className="bg-light p-3 rounded" style={{ fontFamily: 'serif', fontSize: '1.1em' }}>
                            {song.lyrics.split('\n').map((line, index) => (
                              <div key={index}>{line}</div>
                            ))}
                          </div>
                        </div>
                        <small className="text-muted">{song.god}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <Link to="/dashboard" className="btn btn-outline-primary btn-lg">
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* No audio playback elements */}
    </div>
  );
}
