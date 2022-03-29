const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());  //middleware

app.use('/api', require('./server/controller/users'));

// DB connection
mongoose.connect('mongodb+srv://jyothi:yaFj6gVJ3GeIn7wQ@cluster0.efex6.mongodb.net/book-store?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("DB Connected..."))
    .catch(err => console.log(err))

// server running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});