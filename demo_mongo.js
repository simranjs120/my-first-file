
var MongoClient= require('mongodb').MongoClient;
var url= "mongodb+srv://admin:admin@cluster0.ebgh1.mongodb.net/mydb?retryWrites=true&w=majority";
MongoClient.connect(url, function(err, db){
    if (err) throw err;
    console.log("hello");
    var dbo = db.db("mydb");
    var query = { address: "Park Lane 38" };
    dbo.collection("customers").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });

});