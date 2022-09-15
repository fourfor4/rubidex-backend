module.exports = (app) => {
  const addressController = require("../controllers/address.controller");

  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/create", addressController.create);
  router.post("/select", addressController.select);
  app.use("/api/address", router);
};
