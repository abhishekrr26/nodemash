fs=require('fs');

fs.readFile('user.txt','utf8',function(err,data){
    if(err){
        console.log('error')
        return;
    }
   if(data.includes("john")){
    console.log("valid user ")
   }
   else{
    console.log('unknown user')
   }
})
