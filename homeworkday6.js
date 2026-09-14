

fs=require('fs');
fs.writeFile('profile.txt','Name: Riya\nAge: 22\nCity: Mumbai',function(err){
    if(err){
        console.log('err')
        return;
    }
})

fs.readFile('profile.txt','utf8',function(err,data){
 a=data.match(/Name:\s*(.*)/)
 if(a[1]=='Riya'){
    console.log('valid answer')
 }
 else{
    console.log('invalid profile')
 }
})

fs.appendFile('profile.txt','\nStatus:Active',function(err){
    if(err){
        console.log('error')
        return;
    }
})
fs.rename('profile.txt','verified_profile.txt',function(err){
    if(err){
        console.log('error')
        return;

    }
})