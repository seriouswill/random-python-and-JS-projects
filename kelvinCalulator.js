const kelvin = 300;
//kelvin temp
const celsius = kelvin - 273;
//celsius temp = kelvin - 273
let fahrenheit = celsius * (9/5) + 32;
//fahrenheit equation above
fahrenheit = Math.floor(fahrenheit);
//rounding down to an integer
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
