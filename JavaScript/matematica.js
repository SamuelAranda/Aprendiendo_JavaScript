const Matematica = {};

function suma(x1, x2) {
    return x1+x2
}
    
function restar(x1, x2) {
        return x1-x2
}
    
function multiplicar(x1, x2){
    return x1*x2
}
    
 function dividir(x1, x2){
    if(x2==0){
            console.log("No se puede dividir entre 0")
            return
        }else{
            return x1/x2
    }
}

Matematica.suma = suma;
Matematica.restar = restar;
Matematica.multiplicar = multiplicar;
Matematica.dividir = dividir;

module.exports = Matematica