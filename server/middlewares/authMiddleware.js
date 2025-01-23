import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    // get token
    const token = req.header("authorization").split(" ")[1];
    const decryptedToken = jwt.verify(token, process.env.JWT_TOKEN);
    req.body.businessId = decryptedToken.businessId;
    next();
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

export default authMiddleware;
