function upd(a,b,c,d){
user= a=="guest"?"access denied":""
console.log(user);
return b+c-d
}


amount=upd("guest",1000,500,700)

last(amount);
function last(a){
    console.log(a)
    if(a>0){
        console.log("its greater than 0")
    }
    console.log(typeof(a))
}


