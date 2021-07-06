const router = require("express").Router();
const savedBooksRoutes = require("./savedBooks");

router.use("/saved", savedBooksRoutes);

module.exports = router;