const router = require("express").Router();
const controller = require("./orders.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// path for /orders/:orderId
router.route("/:orderId").all(methodNotAllowed);

// path for /orders/
router.route("/").all(methodNotAllowed);

module.exports = router;
