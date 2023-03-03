const express = require('express');
const cors = require('cors');
const usersRouter = require('./src/users');

const app = express();
app.use(cors());

app.use('/api/users', usersRouter);

app.listen(4000, () => {
    console.log('Server running on port 4000');
});

