const express = require('express');
const app = express(); 

const PORT = 8000;

const getWelcomeMessage = (req, res) => {
    res.send('<em>Reindeer food service for train passengers</em>');
};

const getAllMenu = (req, res) => {
    res.send('<h2>Available food menu</h2>')
};

const postDepartureInfo = (req, res) => {
    const departureInfo = req.body;
    res.send(departureInfo);
};

// GET
app.get('/', getWelcomeMessage);

app.get('/menu', getAllMenu);

// POST
app.post('/departure', postDepartureInfo);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})