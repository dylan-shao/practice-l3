var router = require('express').Router();
var dbConn = require('mongodb').MongoClient.connect('mongodb://localhost/l2');

router.get('/', function(req, res, next) {
    dbConn
        .then(function(db) {
            return db.collection('interview').find().toArray();
        })
        .then(res.json.bind(res))
        .catch(function(err){
            console.log(err);
            next(err);
        })
});


module.exports = router;
