const router = require("express").Router();
const savedBooksController = require("../../controllers/savedBooksController");

router.route("/")
    .get(savedBooksController.findAll)
    .post(savedBooksController.create);

router.route("/:id")
    .delete(savedBooksController.remove);

module.exports = router;