import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadSong } from '../actions/songActions';
import { Link } from 'react-router-dom';

export default function SongUploadPage() {
    const [title, setTitle] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [god, setGod] = useState('Shiva');
    const [submitting, setSubmitting] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user?.email) return alert('Please login to submit a song.');
        try {
            setSubmitting(true);
            await dispatch(uploadSong({ title, lyrics, god, uploader: user.email }));
            setTitle('');
            setLyrics('');
            setGod('Shiva');
            alert('Song submitted for approval!');
        } catch (e) {
            alert(`Failed to submit: ${e.message}`);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="container-fluid bg-light min-vh-100">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/dashboard">🕉️ BhaktiPath</Link>
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </div>
                </div>
            </nav>

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card shadow-sm">
                            <div className="card-body p-4">
                                <h3 className="text-primary mb-3">Upload Devotional Song Lyrics</h3>
                                <p className="text-muted">Submit your devotional song lyrics for admin approval.</p>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Deity</label>
                                        <select className="form-select" value={god} onChange={e => setGod(e.target.value)}>
                                            <option>Shiva</option>
                                            <option>Vishnu</option>
                                            <option>Krishna</option>
                                            <option>Hanuman</option>
                                            <option>Durga</option>
                                            <option>Ganesha</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Song Title</label>
                                        <input className="form-control" type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter song title" required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Lyrics</label>
                                        <textarea className="form-control" rows="8" value={lyrics} onChange={e => setLyrics(e.target.value)} placeholder="Paste lyrics here" required />
                                    </div>

                                    <div className="d-grid">
                                        <button className="btn btn-success" type="submit" disabled={submitting}>
                                            {submitting ? 'Submitting...' : 'Submit'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


