module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: "Add credits to enable surveys!" });
  } else {
    next();
  }
};
