let htt=require('http');

htt.createServer(function(req,res){
  if(req.url=='/home'){
    console.log(req.url)
    res.write("Welcome to ABC College!")
    res.end()
  }
  else if(req.url=='/about'){
     console.log(req.url)
    res.write("<h1>Good college</h1> ")
    res.end()
  }
  else{
    console.log(req.url)
    console.log(req.method)
    res.statusCode=404;
    res.statusMessage='not found'
    res.write('page not found')
    res.end()
  }


}).listen(8080)




