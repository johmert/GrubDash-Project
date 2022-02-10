const router = require("express").Router();
const controller = require("./dishes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// path for /dishes/:dishId
router.route("/:dishId").all(methodNotAllowed);

// path for /dishes/
router.route("/").all(methodNotAllowed);

module.exports = router;
