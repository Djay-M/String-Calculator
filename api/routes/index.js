const express = require("express");
const V1Routes = require("./v1");
const router = express.Router();

// Health Check API
// eslint-disable-next-line
router.get("/status", function (req, res, next) {
  return res.json({
    code: 200,
    message: "String Calculator Server UP AND Running, OK!",
  });
});

router.use("/api/v1", V1Routes);

module.exports = router;
