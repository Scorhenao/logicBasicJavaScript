/**menu () sume dos numero si eligo sumar y saque una tabla de multiplicar de 1 al 10 si de doy e multiplicar */

/**Menu que se repota mientras que el usuario no diga que quiere "SALIR"
 * Calculadora con 2 operaciones
 * 1. sumar 2 numeros
 * 2. tabla de multiplicar de x del 1-10
 */

let menu = ""

do{
    menu = prompt(`
    MENU DE OPCIONES
        1. SUMAR
        2. MULTIPLICAR
        3. SALIR

    opcion:
    `)
    switch (menu) {
        case "1":
            let num1 = Number(prompt("Ingrese un numero: "))
            let num2 = Number(prompt("Ingrese un numero: "))
            alert(`La suma es ${num1 + num2}`)
            break;
    
        case "2":
            let num = prompt("¿De que nunmero quieresla tabla?") 
            num = Number(num);
            result = "Tabla de " + num + "\n";
            for (let i = 1; i < 11; i++) {
                result += `${num} x ${i} = ${num*i} \n`
            }
            alert(result)
            break;
        
        case "3":
            alert("Adios")
            break;

        default:
            alert("Opcion no valida")
            break;
    }
}while (menu != "3")