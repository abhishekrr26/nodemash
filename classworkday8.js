let http=require('http');
let fs=require('fs');
let formidable=require('formidable');
let path = require('path');
let email=require('nodemailer');

http.createServer(function(req,res){
    if(req.url==='/up' && req.method.toLocaleLowerCase()==='post'){
        form =new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            if(err){
                console.log('error ocuured')
                return res.end()
            }
        let oldpath=files.uploded[0].filepath;
        let newpath=path.join(process.cwd(),'sample',files.uploded[0].originalFilename);

            fs.rename(oldpath,newpath,function(err){
                if(err){
                    console.log('error')  
                    return res.end()
                }
                var transport = email.createTransport({
                  host: "sandbox.smtp.mailtrap.io",
                  port: 2525,
                  auth: {
                    user: "ae31df38a59cac",
                    pass: "797d39b854f583"
                  }
                });
                transport.sendMail({
                    from: "abc@gmail.com",
                     to: "anj@gmail.com",
                     subject: "Hello from Mailtrap",
                     html: '<h1>Welcome</h1><p>That was easy!</p>'
                    }, (error) => {
                    if (error) {
                      return console.log(error);
                         }})
                res.write('uploded and email was sent')
                res.end()
            })
        })
    }
else{
    
fs.readFile('day8.html',function(err,data){
    if(err){
        console.log('error occured')
        return res.end()
    }
    res.write(data);
    res.end();

})
}
}).listen(8080)