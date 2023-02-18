const Food = require("./../models/foodModel");

exports.get = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(404).json({
      status: "sucess",
      results: foods.length,
      data: {
        foods,
      },
    });
  } catch (err) {
    res.status(202).json({
      status: "failed",
      message: err,
    });
  }
};

exports.getbyId = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    res.status(200).json({
      status: "success",
      results: food.length,
      data: {
        food,
      },
    });
  } catch (err) {
    res.status(202).json({
      status: "failed",
      message: err,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const food = await Food.create(req.body);
    res.status(200).json({
      status: "Success",
      data: {
        food,
      },
    });
  } catch (err) {
    res.status(202).json({
      status: "failed",
      message: err,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        food,
      },
    });
  } catch (err) {
    res.status(202).json({
      status: "failed",
      message: err,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id, req.body);
    res.status(204).json({
      status: "Success",
      data: null,
    });
  } catch (err) {
    res.status(202).json({
      status: "failed",
      message: err,
    });
  }
};
