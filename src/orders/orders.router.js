const router = require("express").Router();
const controller = require("./orders.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// path for /orders/:orderId
router.route("/:orderId").get(controller.read).put(controller.update).delete(controller.delete).all(methodNotAllowed);

// path for /orders/
router.route("/").get(controller.list).post(controller.create).all(methodNotAllowed);

module.exports = router;
