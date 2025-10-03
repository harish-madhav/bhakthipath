import axios from 'axios';

// Prefer relative URL with CRA proxy; allow override via REACT_APP_API_URL
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || '/api',
});

function authHeaders(getState) {
    const email = getState().auth.user?.email;
    return email ? { 'X-User-Email': email } : {};
}

export const uploadSong = (songData) => async (dispatch, getState) => {
    try {
        const res = await api.post('/songs/upload', songData, { headers: authHeaders(getState) });
        return res.data;
    } catch (err) {
        // Surface clearer error to UI
        const msg = err?.response?.data?.message || err.message || 'Upload failed';
        throw new Error(msg);
    }
};

export const fetchSongs = (god) => async dispatch => {
    const res = await api.get('/songs', { params: god ? { god } : {} });
    dispatch({ type: 'SET_SONGS', payload: res.data });
};

export const fetchPendingSongs = () => async (dispatch, getState) => {
    const res = await api.get('/songs/pending', { headers: authHeaders(getState) });
    dispatch({ type: 'SET_PENDING_SONGS', payload: res.data });
};

export const approveSong = (songId) => async (dispatch, getState) => {
    await api.post(`/songs/approve/${songId}`, {}, { headers: authHeaders(getState) });
    // Optionally refresh songs and pendingSongs
};
