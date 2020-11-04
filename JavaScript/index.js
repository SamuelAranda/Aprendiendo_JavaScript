const mates = require("./matematica.js");
const os = require("os");
const archivoNuevo = require("./archivoNuevo.js")

console.log("La suma es", mates.suma(1,2));
console.log("La resta es", mates.restar(1,2));
console.log("La multiplicacion es", mates.multiplicar(1,2));
console.log("La division es", mates.dividir(1,2));
console.log("La division es", mates.dividir(1,0));+

console.log("Cosas OS", os.platform);
console.log("La division es", mates.dividir(1,0));

archivoNuevo.archivoNuevo;