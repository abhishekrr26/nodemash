let http =require('http');
let fs=require('fs');
let formidable=require('formidable');
let path = require('path');
let email=require('nodemailer');

http.createServer(function(req,res){

if(req.url==='/down' && req.method.toLocaleLowerCase()==='post'){
    foam=new formidable.IncomingForm();
    foam.parse(req,function(err,fields,files){
        if(err){
            res.write('error at file')
            return res.end();
        }
        old=files.abc[0].filepath;
        neww=path.join(process.cwd(),'sample',files.abc[0].originalFilename)

        fs.rename(old,neww,function(err){
            if(err){
                res.write('error at upload')
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
                                 subject: "File Uploaded",
                                 text: 'A file has been uploaded by a user. Please check the server.'
                                }, (error) => {
                                if (error) {
                                  return console.log(error);
                                     }})
            res.write('uploaded and email sent')
            res.end()



        })

    })
}
else{
   fs.readFile('hh.html',function(err,data){
    if(err){
        res.write('error found')
        return res.end()
    }
    res.write(data)
    res.end()
   }) 

}
}).listen(3000)



























