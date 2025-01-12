const express = require("express");
const { authorize } = require("../../middlewares/auth");
const router = express.Router();
const StringCalculatorRoutes = require("./stringCalculator.route");

// Health Check API
// eslint-disable-next-line
router.get("/status", authorize(), function (req, res, next) {
  return res.json({
    code: 200,
    message: "String Calculator Service Running, OK!",
  });
});

router.use("/stringCalculator", StringCalculatorRoutes);

module.exports = router;
