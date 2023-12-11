const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const app = express();
const saltRounds = 10;

app.use(bodyParser.json());

// Dummy database for illustration purposes
const users = [];

app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Hash and salt the password
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            return res.status(500).send('Error hashing password');
        }

        // Store the hashed password in the "database"
        users.push({ username, password: hash });

        res.status(201).send('User registered successfully');
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find the user in the "database"
    const user = users.find(user => user.username === username);

    if (!user) {
        return res.status(401).send('Invalid username or password');
    }

    // Compare the entered password with the stored hash
    bcrypt.compare(password, user.password, (err, result) => {
        if (err || !result) {
            return res.status(401).send('Invalid username or password');
        }

        res.status(200).send('Login successful');
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
