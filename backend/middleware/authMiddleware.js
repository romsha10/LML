const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(403)
      .json({ message: "Access denied. No token provided." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(400).json({ message: "Invalid token." });
    }
    req.user = decoded; // Attach decoded user info to request object
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = authMiddleware;
