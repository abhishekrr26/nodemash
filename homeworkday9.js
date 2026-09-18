fs=require('fs');


let a= new Buffer.from("Node.js buffers are powerful","utf-8")

a.write("fast",0,"utf-8")

console.log(a.toString())

let b=new Buffer.from("and flexible!")

c=Buffer.concat([a,b])
final=c.toString()
console.log(final)


fs.writeFile('buffer_output.txt',c,function(err,){
    if(err){
        console.log('error occured')
        return;
    }
    console.log("file created ");
})




