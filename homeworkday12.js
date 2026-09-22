let mongo=require('mongodb').MongoClient;
url= "mongodb://localhost:27017/"

mongo.connect(url)
.then(client=>{
    db=client.db("mashup")
 return   db.collection("homeworkday12").bulkWrite([
{ insertOne: { document: { title: "Java Basics", author: "John", location: "Shelf A" } } },
    { insertOne: { document: { title: "Node.js Guide", author: "Dean", location: "Shelf B" } } },
    { insertOne: { document: { title: "Python 101", author: "Deepak", location: "Shelf D" } } },
    { insertOne: { document: { title: "C++ Mastery", author: "Dean", location: "Shelf C" } } },
    { insertOne: { document: { title: "Data Structures", author: "Ravi", location: "Shelf B" } } },
    { insertOne: { document: { title: "React Handbook", author: "Derek", location: "Shelf D" } } },

    {updateOne:{filter:{title:'Java Basics'},update:{$set:{location:'Shelf Z'}}}},
    {updateMany:{filter:{author:'Dean'},update:{$set:{location:'Shelf E'}}}},
    {deleteOne:{filter:{title:'Phyton 101'}}},
    {deleteMany:{filter:{title:/^D/}}}
 ])
 .then(result=>{
    console.log('success');
    client.close();
 })
 })
 .catch(err=>{
    console.log('errrorr');
    client.close();
 })