const mongoose = require('mongoose');
const path = require('path');

// Load env from multiple likely locations to be resilient on Windows
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config({ path: path.join(process.cwd(), '.env') });

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

if (!MONGO_URI) {
    console.error('Missing MONGO_URI. Create server/.env with MONGO_URI=<your-connection-string>');
    console.error('Checked paths:', path.join(__dirname, '.env'), 'and', path.join(process.cwd(), '.env'));
    process.exit(1);
}

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

module.exports = mongoose;
