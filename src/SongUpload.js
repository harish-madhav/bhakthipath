import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadSong } from './actions/songActions';

export default function SongUpload() {
    const [title, setTitle] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [god, setGod] = useState('Shiva');
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user?.email) {
            alert('Please login to submit a song.');
            return;
        }
        dispatch(uploadSong({ title, lyrics, god, uploader: user.email }));
        setTitle('');
        setLyrics('');
        setGod('Shiva');
        alert('Song submitted for approval!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Upload Song Lyrics</h2>
            <div>
                <label>Deity</label>
                <select value={god} onChange={e => setGod(e.target.value)}>
                    <option>Shiva</option>
                    <option>Vishnu</option>
                    <option>Krishna</option>
                    <option>Hanuman</option>
                    <option>Durga</option>
                    <option>Ganesha</option>
                </select>
            </div>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Song Title" required />
            <textarea value={lyrics} onChange={e => setLyrics(e.target.value)} placeholder="Lyrics" required />
            <button type="submit">Submit</button>
        </form>
    );
}
