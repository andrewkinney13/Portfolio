// Imports
const express = require('express');
const path = require('path');

// App will be used to add middleware when requests are made
const app = express();

// Parse incoming requests
app.use(express.urlencoded({ extended: true }));

// Serves CSS from public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use("/:id", express.static(path.join(__dirname, 'public')));

// Use PUG for html rendering
app.set('view engine', 'pug');

// Route files which can be accessed from root
app.use('/', require('./routes/home'));

// Listen on port 8080
app.listen(8080, () => {
    console.log('Server is running  on port 8080')
});