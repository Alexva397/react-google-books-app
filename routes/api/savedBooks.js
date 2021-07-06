const router = require("express").Router();
const savedBooksController = require("../../controllers/savedBooksController");

router.route("/")
    .get(savedBooksController.findAll)
    .post(savedBooksController.create);



module.exports = router;