const fs = require("fs")
const nombre = "texta.txt"
    
fs.writeFile("./" + nombre, "Texto nuevo", function(err){
    if(err){
    console.log("No se ha generado el archivo")

    }else{
    console.log("Se ha generado el archivaco " + nombre)
    }
})

fs.readFile("./" + nombre, function(err, data){
    if (err){
        console.log(err)
    }
    
    if (data){
        console.log(data.toString())
    }
} )

console.log("Hola que ase");