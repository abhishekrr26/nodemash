http=require('http');
fs=require('fs')
http.createServer(function(req,res){
    url=new URL(req.url,`http://${req.headers.host}`)
    nam='.'+url.pathname;
if(nam === './favicon.ico'){   
    return res.end()
}
    fs.readFile(nam,function(err,data){
        if(err){
            return res.end()
        }
        res.write(data)
        res.end()
    })
rs=fs.createReadStream(nam);
rs.on('open',function(){
    console.log('opened')
   
})
rs.on('error',function(){
    console.log('error')
    
})

}).listen(8000);













