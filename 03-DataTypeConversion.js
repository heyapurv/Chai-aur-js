let score = "33"
console.log(typeof score)
console.log(typeof (score))

// string to number conversion
let valueInNumber = Number(score)
console.log(typeof valueInNumber);

//  y'll get NaN (not a number) in case of "34hfhjd", true = 1 false = 0
// "" => false
// "sfasdf" => true

// number to string conversion 
let someNumber = 33
let srtingNumber = String(someNumber)
console.log( typeof srtingNumber);

//  you can also convert to (Boolean)