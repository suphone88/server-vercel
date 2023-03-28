const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
<<<<<<< HEAD
      target: "http://localhost:5000",
=======
      target: "https://server-vercel-2whz.vercel.app",
>>>>>>> 8c28640ce248532bb61c6aff95808621856ff648
    })
  );
};
