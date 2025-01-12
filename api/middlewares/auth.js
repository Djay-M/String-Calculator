const APIError = require("../utils/APIErrors");
const { basicAuthToken } = require("../config/vars");

exports.authorize = () => async (req, res, next) => {
  try {
    const token =
      req?.headers["authorization"] || req?.headers["Authorization"];

    if (!token) {
      return next(
        new APIError({
          status: 400,
          message: "Token not found in the Headers",
        })
      );
    }

    if (token !== `Basic ${basicAuthToken}`) {
      return next(
        new APIError({
          status: 400,
          message: "Invalid Basic Auth token",
        })
      );
    }

    return next();
  } catch (error) {
    next(error);
  }
};
