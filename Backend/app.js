const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');
const adminRoute = require('./routes/adminRoute');
const auth = require('./routes/auth');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/admins', adminRoute);

app.use('/users', userRoute);

app.use('/authenticate', auth)

app.get('/', (req, res) => {
    res.send('User Admin App');
});

app.listen(6199, () => {
    console.log(`Server is running on http://localhost:6199`);
});