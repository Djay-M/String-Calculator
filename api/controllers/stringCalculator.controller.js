const _ = require("lodash");
const { calculateStringVal } = require("../utils/stringCalculator.helper");
const APIError = require("../utils/APIErrors");

exports.stringCalculator = async (req, res, next) => {
  try {
    const { body: reqBody } = req;
    const { inputString } = reqBody;
    const { val, negativeNumbers, positiveNumbers } =
      calculateStringVal(inputString);

    if (negativeNumbers?.length) {
      throw new APIError({
        status: 400,
        message: `Negative Number not allowed in inputString, negative numbers: ${negativeNumbers}`,
      });
    }
    return res.json({
      code: 200,
      message: "String Calclated Successfully",
      data: { inputString, val, negativeNumbers, positiveNumbers },
    });
  } catch (error) {
    next(error);
  }
};
