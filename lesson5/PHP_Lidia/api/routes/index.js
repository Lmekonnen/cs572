const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");
const publisherController = require("../controllers/publisherController")


router.route("/books").get(bookController.getAllBooks)
    .post(bookController.addOneBook);

router.route("/books/:bookID").get(bookController.getOneBook)
    .put(bookController.updateOneBook)
    .delete(bookController.deleteOneBook);



router.route("/books/:bookID/publisher").get(publisherController.getAllPublishers)
    .post(publisherController.addPublisher);

router.route("/books/:bookID/publisher/:publisherId").get(publisherController.getOnePublisher)
    .put(publisherController.updatePublisher)
    .delete(publisherController.deletePublisher);

module.exports = router;
