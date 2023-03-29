//import api from "./api/apis";

const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
      //target: `${api}`,
    })
  );
};
