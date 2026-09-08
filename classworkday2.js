cust={
    name:"abhi",
    comment:"The service was excellent, with prompt responses and professional support throughout. The team showed great attention to detail and ensured customer satisfaction at every step. I truly appreciate the dedication and efficiency displayed. Overall, a reliable and trustworthy experience that I would highly recommend to others without hesitation."
}
 function cafe(obj){
    console.log("Thank You")
    console.log(obj.name.toUpperCase())
    console.log(obj.comment.slice(0,21))
 }


cafe(cust);