const { Joi } = require("celebrate");

module.exports = {
  // POST api/v1/stringCalculator/
  stringCalculator: {
    body: {
      inputString: Joi.string().allow("").required(),
    },
  },
};
