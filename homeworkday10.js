fs=require('fs')




a='';
st=fs.createReadStream('conclusion.txt');
st.setEncoding('UTF8');
st.on('data',function(chunk){
    a=a+chunk
})
st.on('end',function(){
console.log(a)
console.log("reading completed ")
})
st.on('error',function(err){
    console.log(err.stack)
})

b='';
str=fs.createReadStream('intro.txt');
str.setEncoding('UTF8');
str.on('data',function(chunk){
    b=b+chunk
})
str.on('end',function(){
console.log(b)
console.log("reading completed ")
    var buf1 = new Buffer.from(a+' ');
    var buf2 = new Buffer.from(b);
    var buf3 = Buffer.concat([buf1,buf2 ]);
    console.log(buf3.toString())
})
str.on('error',function(err){
    console.log(err.stack)
})

