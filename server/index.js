
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const allowedOrigins = [
    'http://localhost:3000',
    'https://bhakthipath.netlify.app',
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true); // allow server-to-server and curl
        if (allowedOrigins.includes(origin)) return callback(null, true);
        return callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'X-User-Email'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());

// MongoDB Atlas connection
require('./db');

const adminRoutes = require('./admin');
const songRoutes = require('./songs');

// Simple identity via header for now; client must send X-User-Email
app.use((req, res, next) => {
    const email = req.headers['x-user-email'];
    req.user = email ? { email } : null;
    next();
});

app.use('/api', adminRoutes);
app.use('/api', songRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ ok: true, env: process.env.NODE_ENV || 'development' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
