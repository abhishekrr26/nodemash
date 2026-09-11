let http=require('http');

http.createServer(function(req,res){
if(req.url == '/'){
res.write('welcome to home page')
res.end();
}
else if(req.url == '/about'){
    res.write('this is a simple node.js server')
    res.end();
}
else if(req.url == '/contact'){
    res.write('contact us abc@gmail.com')
    res.end()
}
else{
    res.write('404 page unavailable')
    res.end()

}

}).listen(3000);