const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Serve static files from the root directory
app.use(express.static(__dirname));

// Handle root URL by sending the index.html file
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

// Your login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simulate user authentication (replace with database authentication)
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
