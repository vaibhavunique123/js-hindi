// array

const myArr=[0,1,2,3,4,5]
//console.log(myArr);
//console.log(myArr[3]);

const array2= new Array(2,3,4,5)
//console.log(array2[2]);

console.log("A",myArr)
const ar1=myArr.slice(1,3);

console.log(ar1);
console.log("B", myArr)

const ar2=myArr.splice(1,3)
console.log("C", myArr)
console.log(ar2)

// array methods

array2.push(40)
array2.pop()
//console.log(array2)
array2.unshift(4)
//console.log(array2)
array2.unshift(4)
//console.log(array2)
array2.shift()
//console.log(array2)

// primitive non primitive
let a= 20
let b= a
b=30

//console.log(a);
//console.log(b);

let ah ={
    name:"vaibhav"
}
let bh=ah;
bh.name="rakesh";
//console.log(bh.name)
//console.log(ah.name)