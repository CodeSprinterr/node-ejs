const express = require('express');
const app = express();
const connect = require('./db/db');
const path = require('path');
const engine = require('ejs-mate'); 
const homeRoutes = require('./routes/home.routes');
const adminRoutes = require('./routes/admin.routes');
const authMiddleware = require('./middlewares/about.middleware');

// Connect to database
connect();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(authMiddleware);

// Set view engine and views path
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use ejs-mate for layout support
app.engine('ejs', engine); 


// Routes setup
app.use('/', homeRoutes); 
// app.use('/admin', adminRoutes); 

module.exports = app;
