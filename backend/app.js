const express = require("express");
const morgan = require("morgan");
const FoodRouter = require("./routers/foodRouter");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/food", FoodRouter);

module.exports = app;
