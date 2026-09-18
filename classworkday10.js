data="Books are a uniquely portable magic";
fs=require("fs");

str=fs.createWriteStream('rest.txt');
str.write(data,'UTF8');

str.end()

str.on('finish',function(){
    console.log("writing has completed");
})
str.on('error',function(err){
    console.log(err.stack)
})



a='';
st=fs.createReadStream('rest.txt');
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




