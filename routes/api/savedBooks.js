const router = require("express").Router();
const savedBooksController = require("../../controllers/savedBooksController");

router.route("/")
    .post(savedBooksController.create);



module.exports = router;