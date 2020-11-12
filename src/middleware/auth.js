// 用于请求头token验证
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("token");
  if (!token) return res.status(401).json({ message: "Auth Error, Please login" });

  try {
    const decoded = jwt.verify(token, "randomString");
    // decoded.user包含用户的ID，也就是login或者signup时的payload参数
    req.user = decoded.user;
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token, Please Login Again" });
  }
};