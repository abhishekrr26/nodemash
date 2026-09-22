const { name } = require('nodemailer/lib/package-info.js');

let mongo=require('mongodb').MongoClient;
url= "mongodb://localhost:27017/"

mongo.connect(url)
.then(client=>{
    db=client.db("mashup")
 return   db.collection("classworkday12").bulkWrite([
        { insertOne: { document: { name: 'John', city: 'Trivandrum' } } },
  { insertOne: { document: { name: 'Deepak', city: 'Kollam' } } },
  { insertOne: { document: { name: 'Dean', city: 'Trivandrum' } } },
  { insertOne: { document: { name: 'Rahul', city: 'Calicut' } } },
  { insertOne: { document: { name: 'Ashwin', city: 'Calicut' } } },
  { insertOne: { document: { name: 'Rolly', city: 'Alleppy' } } },
  { insertOne: { document: { name: 'Nikhil', city: 'Kottayam' } } },
  { insertOne: { document: { name: 'Raymond', city: 'Trivandrum' } } },
  { insertOne: { document: { name: 'Dean', city: 'Calicut' } } },

  {updateOne:{filter:{name:'John'},update:{$set:{name:'Johnny',city:'Chennai'}}}},
  {updateMany:{filter:{name:'Dean'},update:{$set:{city:'Kollam'}}}},
  {deleteOne:{filter:{name:'Deepak'}}},
  {deleteMany:{filter:{name: /^D/}}}
   
])
.then(result=>{
    console.log('completed')
    client.close()
})

})
.catch(err=>{
console.log('error')
client.close()
})