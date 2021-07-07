const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Book
            .find(req.query)
            .sort({ title: -1 })
            .then(bookData => res.json(bookData))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Book
            .create(req.body)
            .then(bookData => res.json(bookData))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Book
          .findById({ _id: req.params.id })
          .then(bookData => bookData.remove())
          .then(bookData => res.json(bookData))
          .catch(err => res.status(422).json(err));
      }
};
