const bigNumber=123453565223332n
//console.log(bigNumber)

// reference non primitive 
// array object function  
const hero= ["vaibhav", "jojo","neha"]
//console.log(hero)

let myObj={
    name:"vaibhav",
    age:24,
}
//console.log(myObj)

const myFunction=function(){
    console.log("vaibhav")
}
//console.log(myFunction)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive) and heap(non-primitive)

let firstvalue="vaibhav 1"
let secondvalue= firstvalue
secondvalue="vaibhav 3"
//console.log(firstvalue)
//console.log(secondvalue)

let firstobj ={
    name:"vaibhav",
    upi:"vaibahv_paytm"
}

let second_obj= firstobj
second_obj.name="rakesh"

console.log(firstobj)
console.log(second_obj)
