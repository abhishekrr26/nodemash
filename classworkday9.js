let buf =new Buffer.from("nodeJS is fast", "utf-8");
a=buf.toString().slice(0,6)
console.log(a);

let bu=new Buffer.from("powerful","utf-8");
c=buf.slice(0,6)

d=c.compare(bu)
if (d==1){
  console.log('node is late ')
}
else{
console.log('nodes comes first ')
}

ff=c.toJSON(c)
console.log(ff)