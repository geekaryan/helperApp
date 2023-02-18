const FoodController = require("./../controllers/foodController");

const express = require("express");

const router = express.Router();

router.route("/").post(FoodController.create).get(FoodController.get);

router
  .route("/:id")
  .patch(FoodController.update)
  .delete(FoodController.delete)
  .get(FoodController.getbyId);

module.exports = router;
