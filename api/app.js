const express = require('express');
const path = require('path');
const app = express();

// 1. Static File Handlers (Replaces your switch block & fs.readFile)
// These automatically set Content-Type for .css, .js, .png, .jpg, .pdf, etc.
app.use('/booking', express.static(path.join(__dirname, '../booking')));
app.use('/pdf', express.static(path.join(__dirname, '../pdf')));
app.use('/product', express.static(path.join(__dirname, '../product')));
app.use('/bookshelf', express.static(path.join(__dirname, '../bookshelf')));

// Serve the 'frontend' folder for general assets (CSS/JS)
app.use(express.static(path.join(__dirname, '../frontend')));

// 2. Routes (Replaces your 'routs' object)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/book', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/book.html'));
});

app.get('/fava', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/fava.html'));
});

app.get('/note', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/note.html'));
});

// 3. Export for Vercel (Do NOT use app.listen)
module.exports = app;