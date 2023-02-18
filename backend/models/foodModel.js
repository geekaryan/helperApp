const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  state: {
    type: String,
    required: [true, "must have a state name"],
  },
  city: {
    type: String,
    required: [true, "must have a city name"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  capacity: {
    type: Number,
    requrired: [true, "how many people can be feeded.."],
  },
  hotel: {
    type: String,
    required: [true, "must have a hotel name so that we can pick up food"],
  },
  address: {
    type: String,
    required: [true, "must have a hotel dress"],
  },
  delievred: {
    type: String,
  },
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
