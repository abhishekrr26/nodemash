mongo=require('mongodb').MongoClient;
url= "mongodb://localhost:27017/"

mongo.connect(url)

.then(client=>{
    db=client.db("mashup");
 return db.collection("homework").insertMany([
        { "name": "John", "city": "Trivandrum" },
  { "name": "Rahul", "city": "Calicut" },
  { "name": "Dean", "city": "Trivandrum" },
  { "name": "Deepak", "city": "Kollam" },
  { "name": "Ashwin", "city": "Calicut" },
  { "name": "Rolly", "city": "Alleppy" },
  { "name": "Nikhil", "city": "Kottayam" },
  { "name": "Raymond", "city": "Trivandrum" }
    ])
    .then(res=>{
        console.log('inserted ')
        client.close();
    })
})
.catch(err=>{
console.log('error ')
})

//2nd question 
mongo.connect(url)
.then(client=>{
    db=client.db("mashup")
 return   db.collection('homework').find({city:"Calicut"},{projection:{_id:0,city:0}}).toArray()
    .then(result=>{
        console.log(result)
        client.close()
    })
})
.catch(err=>{
    console.log(err)
})













