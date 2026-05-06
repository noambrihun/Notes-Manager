const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const noteRouter = require('./routes/noteRouter');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

app.use(cors());
app.use(express.json());
app.use('/', noteRouter);
console.log("notes router loaded");

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


app.get('/', (req, res) => {
    res.send('Notes API is running');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});