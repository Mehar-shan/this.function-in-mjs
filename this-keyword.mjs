const details ={
    firstName: "shan",
    secondName:"ali",
    finalName: function (){return details.firstName + ' ' + details.secondName}
}
console.log(details.finalName())