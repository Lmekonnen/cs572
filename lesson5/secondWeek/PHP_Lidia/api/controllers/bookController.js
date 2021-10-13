require("../data/dbConnection");
const mongoose = require("mongoose");
const books = mongoose.model("book");

module.exports.addOneBook = function (req, res) {
    console.log("POST a book request");
    const newBook = req.body;
    books.create(newBook, function (err, addedBook) {
        if (err) {
            console.log("Error creating a book");
            res.status(500).json({ "Message": "Error creating a book" });
        }
        else {
            console.log("Book Created");
            res.status(200).json({ "Message": "Book successfully added", addedBook });
        }
    });
};
module.exports.getAllBooks = function (req, res) {
    console.log("GET all books request");
    var offset = 0, count = 6, maxCount = 9;
    if (req.query.offset) {
        offset = parseInt(req.query.offset);
        console.log("Offset", offset);
    }
    if (req.query.count) {
        var tempCount = parseInt(req.query.count);
        if (tempCount > maxCount) {
            res.status(404).send(`You cannot retrieve more than ${maxCount} books at a time`);
            return;
        }
        else {
            count = tempCount;
            console.log("Count", count);
        }
    }
    if (isNaN(offset) || isNaN(count)) {
        res.status(404).json({ "Messge": "QueryString offset and count should be numbers" });
        return;
    }
    else {
        books.find().skip(offset).limit(count).exec(function (err, books) {  //linking call back to an event
            if (err) {
                console.log("Error finding books");
                res.status(500).json({ "Message": "Error finding books" });
                return
            }
            else {
                console.log("books found");
                res.status(200).json(books);
            }
        });
    }
};
module.exports.getOneBook = function (req, res) {
    console.log("GET a book request");
    const bookID = req.params.bookID;
    if (!mongoose.isValidObjectId(bookID)) {
        console.log("Invalid book ID");
        res.status(404).json({ "Message": "Invalid book ID" });
        return;
    }
    else {
        books.findById(bookID).exec(function (err, book) {
            if (err) {
                console.log("Error finding book");
                res.status(500).json({ "Message": "Error finding book" })
            }
            else if (!book) {
                console.log("Book ID doesn't exist");
                res.status(404).json({ "Message": "Book ID doesn't exist" });
                return;
            }
            else {
                console.log("Found book");
                res.status(200).json(book);
            }
        });
    }
};
module.exports.updateOneBook = function (req, res) {
    console.log("PUT a book request");
    const bookID = req.params.bookID;
    if (!mongoose.isValidObjectId(bookID)) {
        console.log("Invalid book ID");
        res.status(404).json({ "Message": "Invalid book ID" });
        return;
    }
    else {
        books.findById(bookID).exec(function (err, book) {
            if (err) {
                console.log("Error finding book");
                res.status(500).json({ "Message": "Error finding book" })
            }
            else if (!book) {
                console.log("Book ID doesn't exist");
                res.status(404).json({ "Message": "Book ID doesn't exist" });
                return;
            }
            else {
                book.title = req.body.title;
                book.author = req.body.author;
                book.genre = req.body.genre
                // book.publisher = req.body.publisher;
                book.save(function(err,updatedBook){
                    if(err){
                        console.log("Error updating book");
                        res.status(500).json({"Message":"Error updating book"});
                    }
                    else{
                        console.log("book successfully updated!");
                        res.status(200).json({"Message":"book succesfully updated",updatedBook});
                    }
                });
            }
        });
    }
}
module.exports.deleteOneBook = function (req, res) {
    console.log("DELETE a book request");
    const bookID = req.params.bookID;
    if(!mongoose.isValidObjectId(bookID)){
        console.log("Invalid book ID");
        res.status(404).json({"Message":"Invalid book ID"});
    }
    else{
        books.findByIdAndRemove(bookID).exec(function(err,book){
            if(err){
                console.log("Error deleting book");
                res.status(500).json({"Message":"Error deleting book"});
            }
            else if(!book){
                console.log("Book id not found");
                res.status(404).json({"Message":"Book id not found"});
            }
            else{
                console.log("Book successfully deleted");
                res.status(200).json({"Message":"Book successfully deleted",book});
            }
        });
    }
};
