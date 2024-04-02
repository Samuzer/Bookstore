require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const application = require("./config/application");
const database = require("./config/database");
const bookRoutes = require("./src/routes/bookRoutes");

const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  if (Object.keys(req.body).length) console.log("body: ", req.body);
  if (Object.keys(req.params).length) console.log("params: ", req.params);
  if (Object.keys(req.query).length) console.log("query: ", req.query);
  next();
});

// Routes
app.use("/api/books", bookRoutes);

app.listen(application.port, () => {
  console.log(`Server is running on port ${application.port}`);
});

// Connect to MongoDB
mongoose
  .connect(database.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
