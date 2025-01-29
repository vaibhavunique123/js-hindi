const name="vaibhav"
const repoCount=50
//console.log(name+repoCount)

const gameName= new String("vaibhav")

console.log(gameName[0]);
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('b'))

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-5,3)
console.log(anotherString);

const url="https://vaibhav.com/vaibhav%20srivastava"

console.log(url.replace('%20','-'))
