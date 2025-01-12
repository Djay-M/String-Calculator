const express = require("express");
const router = express.Router();
const { celebrate: validate } = require("celebrate");
const controller = require("../../controllers/stringCalculator.controller");
const {
  stringCalculator,
} = require("../../validations/v1/stringCalculator.validation");
const { authorize } = require("../../middlewares/auth");

router
  .route("/")
  /**
   * @api {POST} api/v1/stringCalculator/
   * @apiDescription Calculate The Value of String
   * @apiVersion 1.0.0
   * @apiName StringCalculator
   * @apiGroup Calculator
   * @apiPermission admin, user
   *
   * @apiSuccess {Object} Status, message, data
   */
  .post(authorize(), validate(stringCalculator), controller.stringCalculator);

module.exports = router;
