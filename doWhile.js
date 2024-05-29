/**haz esto: do  mientras esto sea true: while*/
// condition = false;
// do{
//     let num = Number(prompt("dime un numero par: "))
//     if (num%2 != 0) {
//         alert("este no es un numero par")
//         condition = true;
//     }else{
//         alert("excelente sabes leer")
//     }
// }while (condition) 

/**Promedio de notas (lista de notas) */

let flag = "yes";
const listaNotas = []
do {
    let note = Number(prompt("Nota: "))
    listaNotas.push(note)
    flag = prompt("Desea ingresar otra nota? (yes/no) ") 
} while (flag == "yes");
/**reduce es la suma */
alert(`${listaNotas.reduce((acum,value)=>acum+value) / listaNotas.length}`)

/**menu () sume dos numero si eligo sumar y saque una tabla de multiplicar de 1 al 10 si de doy e multiplicar */

