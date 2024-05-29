/*1. Contar de 0 a 4*/ 
console.log("Contar de 0 a 4")

for (let i = 0; i < 5; i++) {
    console.log(i);
}

/*2. Contar de 3 a 0*/
console.log("Contar de 3 a 0")
for (let i = 3; i > -1; i--) {
    console.log(i);
}

/*3. Tabla de multiplicar de 12*/

let num = Number(prompt("di un numero para multiplicar hasta 10"));

result = "tabla del "+num+"\n";

for (let i = 1; i < 11; i++) {
    result += `${num} x ${i} = ${num*i} \n`
}
alert(result);

/*4. Recorrer una lista(of) o objetos(in)*/

const lista = [1,2,4];

const objeto = {
    "name": "antony",
    "lastname": "ruiz",
}

for (numero of lista){
    console.log(numero);
}
/**acceder a propiedad */
console.log("acceder a propiedad")
for (datos in objeto){
    console.log(datos);
}

/**acceder a atributo */
console.log("acceder al valor")
for (datos in objeto){
    console.log(objeto[datos]);
}