/**pedir un numero par y no parar hasta que se cumpla esa condicion */
/**var consume 1 solo espacio*/
let num = Number(prompt("dime un numero par: "));

while (num%2 != 0) {
    alert("ese numero NO ES PAR")
    num = Number(prompt("dime un numero par: "));
};

