require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Environment variables endpoint
app.get('/env-config', (req, res) => {
    res.json({
        GROQ_API_KEY: process.env.GROQ_API_KEY,
        PEXELS_API_KEY: process.env.PEXELS_API_KEY
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
