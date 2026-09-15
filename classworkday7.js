http=require('http');
fs=require('fs')

http.createServer(function(req,res){
a= new URL(req.url,`http://${req.headers.host}`)
b='.'+a.pathname;

fs.readFile(b,function(err,data){
    if(err){
        return res.end()
    }
    res.write(data)
    res.end()
})

rs=fs.createReadStream(b);
rs.on('open',function(){
    console.log("opened")
   
})
rs.on('error',function(){
    console.log("error")
    
})



}).listen(3030);












