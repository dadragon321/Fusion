const express = require("express");
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use(express.static("views/images"));

app.listen(5000, () => console.log("Server running"));
