const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/users", "/payments", "/surveys/new", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
