person={
      fullName : "Sarah Johnson",
    welcomeMsg : "   Welcome to the new platform! Hope you enjoy your ",
    ans:function (){

    console.log(person.fullName.slice(0,1))
    console.log(person.welcomeMsg.length)
    console.log(person.welcomeMsg.slice(0,16))
    console.log(person.welcomeMsg.substring(0,16))
    console.log(person.fullName.toUpperCase())
    console.log(person.welcomeMsg.toLowerCase())
    console.log(person.welcomeMsg.trim())
    console.log(person.fullName.split(" "))
    console.log(person.welcomeMsg.indexOf("Welcome"))
    console.log(`${person.fullName} ${person.welcomeMsg}`)

}
}
person.ans();

