//import api from "./api/apis";

const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      //target: "http://localhost:5000",

      target: "https://server-vercel-2whz.vercel.app",
      // pathRewrite: {
      //   "^/api": "", // strip "/api" from the URL
      //   "^/auth/google": "",
      // },
    })
  );
};
