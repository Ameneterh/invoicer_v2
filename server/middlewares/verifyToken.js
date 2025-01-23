import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "User not authorized!" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);

    if (!decoded)
      return res
        .status(401)
        .json({ success: false, message: "Invalid token!" });

    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log("Error in verifyToken", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
