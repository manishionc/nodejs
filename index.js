const express = require('express');
const app = express();
const port = 3000;

// Sample list of fruits
const fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    // ... (other fruits)
];

// Sample list of animals
const animals = [
    { id: 1, name: 'Lion' },
    { id: 2, name: 'Elephant' },
    // ... (other animals)
];

// Endpoint to get the list of fruits
app.get('/fruits', (req, res) => {
    res.json(fruits);
});

// Endpoint to get the list of animals
app.get('/animals', (req, res) => {
    res.json(animals);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
