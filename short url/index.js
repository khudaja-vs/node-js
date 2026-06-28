const express = require('express');

const urlRoutes = require('./routes/url');
const app = express();
const port = 8001;

//app.use(express.json());
app.use('/url', urlRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});