/* Two Types of Data Types
1. Primitiv => 7 types => String, Number, Boolean, Null, Undefiened, Symbol, BigInt
2. Non-Primitive/Referance => Array, Objects, Function
*/

// Primitive

// Number Data Type
const uid = 22010
// String Data Type
let name = "Keshav"
// Boolean
let logIn = true
// Null
const temp = ""
// Undefined
let state;
// Symbol
const ID = Symbol('123')
const ID2 = Symbol('123')
// BigInt
const bigNum = 234455675535364n


console.table([uid, name, logIn, temp, state, ID, ID2, bigNum])
console.table([typeof uid, typeof name, typeof logIn, typeof temp, typeof state, typeof ID, typeof ID2, typeof bigNum])
console.log(ID === ID2)

// Non-Primitive

const arrHero = ["ironman", "spiderman", "captainAmerica"];
let myObj = {
    name : " keshav",
    age : 20,
    state : "Bihar"
}

console.log(arrHero)
console.log(myObj)