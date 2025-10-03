const express = require('express');
const router = express.Router();
const mongoose = require('./db');

const songSchema = new mongoose.Schema(
    {
        title: String,
        lyrics: String,
        god: String,
        uploader: String,
        status: { type: String, enum: ['pending', 'approved'], default: 'pending' },
    },
    { timestamps: true }
);

const Song = mongoose.models.Song || mongoose.model('Song', songSchema);

// Middleware to check admin (replace with real auth in production)
function isAdmin(req, res, next) {
    if (req.user && req.user.email === 'admin@gmail.com') return next();
    res.status(403).send('Forbidden');
}

router.get('/songs/pending', isAdmin, async (req, res) => {
    try {
        const songs = await Song.find({ status: 'pending' }).sort({ createdAt: -1 });
        res.json(songs);
    } catch (err) {
        console.error('Pending fetch error', err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/songs/approve/:id', isAdmin, async (req, res) => {
    try {
        await Song.findByIdAndUpdate(req.params.id, { status: 'approved' });
        res.sendStatus(200);
    } catch (err) {
        console.error('Approve error', err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
