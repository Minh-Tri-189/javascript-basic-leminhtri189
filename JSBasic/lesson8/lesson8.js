console.log("hello world from html")

// khai báo object 
let a = {
 name : `minh tri`,
 adddress: `tp hcm`,
 email : `leminhtri@gmail.com`,
 a: function() {
    console.log(`hello world inside`)
    return ''
 }
}; 
let b = `leminhtri`
console.log("Type of a: ", typeof a, "Type of b: ", typeof b)
console.log("My name is: ", a.name)
console.log("I live in: ",a.adddress)
console.log("call funcrtion: ", a.a())