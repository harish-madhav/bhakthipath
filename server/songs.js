const express = require('express');
const router = express.Router();
const mongoose = require('./db');

const songSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        lyrics: { type: String, required: true },
        god: { type: String, required: true },
        uploader: { type: String, required: true },
        status: { type: String, enum: ['pending', 'approved'], default: 'pending' },
    },
    { timestamps: true }
);

const Song = mongoose.models.Song || mongoose.model('Song', songSchema);

// Upload song (normal user)
router.post('/songs/upload', async (req, res) => {
    try {
        const { title, lyrics, god, uploader } = req.body;
        if (!title || !lyrics || !god || !uploader) {
            return res.status(400).json({ message: 'Missing required fields', body: req.body });
        }
        const doc = await Song.create({ title, lyrics, god, uploader, status: 'pending' });
        res.status(201).json({ id: doc._id });
    } catch (err) {
        console.error('Upload error', err);
        res.status(500).json({ message: 'Server error', error: err?.message });
    }
});

// Get approved songs (optionally filter by god)
router.get('/songs', async (req, res) => {
    try {
        const { god } = req.query;
        const filter = { status: 'approved' };
        if (god) filter.god = { $regex: `^${god}$`, $options: 'i' };
        const songs = await Song.find(filter).sort({ createdAt: -1 });
        res.json(songs);
    } catch (err) {
        console.error('Fetch songs error', err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
