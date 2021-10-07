
const mongoose = require("mongoose");
const Book = mongoose.model("book"); 



module.exports.getAllPublishers = function (req, res) { 
    const bookID = req.params.bookID; 
    Book.findById(bookID).select("publishers").exec(function (err, publisher) {
        if(err){
            res.status(500).json(err);
        }else{
        res.status(200).json(publisher);
        }
    });
}



module.exports.getOnePublisher= function(req, res) { 
    const bookID= req.params.bookID;
    const publisherId= req.params.publisherId;
    Book.findById(bookID).select("publishers").exec(function(err, book) {
        if(err){
            res.status(500).json(err);
        }else{
            const publisher= book.publishers.id(publisherId);
            if(!publisher){
                res.status(404).json({ "Error": "Publisher ID not recognized" });
            }else{
            res.status(200).json(publisher); 
            }
        } 
    });
};



module.exports.addPublisher = function (req, res) {  
    const bookID = req.params.bookID;
    Book.findById(bookID).exec(function (err, book) {
        if (err) {
            res.status(500).json(err);
        } else if (!book) {
            res.status(404).json({ "Error": "Book ID is not recognized"});
        }else{
            const newPublisher = req.body.publishers;
            book.publishers.push(newPublisher);
            book.save(function(err,newpublisher){
                if(err){
                    res.status(500).json(err);
                }
                else{
                    res.status(200).json({"Publisher added": newpublisher})
                }
            })
        } 
    })
};



module.exports.updatePublisher = function (req, res) {  
    const bookID = req.params.bookID;
    const publisherId = req.params.publisherId;
    Book.findById(bookID).exec(function (err, book) {
        if (err) {
            res.status(500).json(err);
        } else if (!book) {
            res.status(404).json({ "Error": "Book ID unrecognized"});
        }else{
            const editpublisher= book.publishers.id(publisherId);
            editpublisher.name = req.body.name;
            editpublisher.address = req.body.address;
            book.save(function(err, updatedpublisher){
                if(err){
                    res.status(500).json(err);
                }else{
                    res.status(200).json({"Publisher Updated":updatedpublisher})
                }
            })
        } 
    })
};



module.exports.deletePublisher = function (req, res) {  
    const bookID = req.params.bookID;
    const publisherId = req.params.publisherId;
    Book.findById(bookID).exec(function (err, book) {
        if (err) {
            res.status(500).json(err);   
        } else if (!book) {
            res.status(404).json({ "Error": "Book ID unrecognized"});
        }
        else{
            book.publishers.id(publisherId).remove();
            book.save(function(err, publisherdeleted){
                if(err){
                    res.status(500).json(err);
                }else{
                    res.status(200).json({"Publisher Deleted": publisherdeleted})
                }
            });
        } 
    })
};
