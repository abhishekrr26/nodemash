let mongo=require('mongodb').MongoClient;
url= "mongodb://localhost:27017/"

mongo.connect(url)
.then(client=>{
  db=client.db("node1");
  db.collection("classwork").insertMany([
    {name:'john',city:'Kannur'},
    {name:'meera',city:'kochi'},
    {name:'lekshmi',city:'calicut'}
  ])
  .then(res=>{
    console.log('inserted')
  })
})
.catch(err=>{
  console.log(err)
})

//2nd qns
mongo.connect(url)
.then(client=>{
db=client.db("node1");
return db.collection("classwork").find({city:'kochi'},{projection:{_id:0}}).toArray()
.then(result=>{
  console.log(result)
  client.close()
})
})
.catch(err=>{
  console.log(err)
})





























