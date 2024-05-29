/**menu () sume dos numero si eligo sumar y saque una tabla de multiplicar de 1 al 10 si de doy e multiplicar */

/**Menu que se repota mientras que el usuario no diga que quiere "SALIR"
 * Calculadora con 2 operaciones
 * 1. sumar 2 numeros
 * 2. tabla de multiplicar de x del 1-10
 */
star = true
while (star) {
    let select = String(prompt("digite (multi) si quiere la tabla del 10 de un numero o digite (sum) para sumar 2 numeros")).toLowerCase()
    
    if (select != "multi" || select != "sum") {
        alert("digitaste una opcion no valida")
    }
    
    while (select === "multi"){
        let num = parseInt(prompt("digite un numero para ver su tabla de multiplicar"))
        for (let i = 1; i < 11; i++) {
            alert(`${num} x ${i} = ${num*i}`)
        }
    
        let exit = prompt("si quiere dejar de ver tablas ponga (SALIR) sino ponga cualquier cosa").toLocaleUpperCase()
        if (exit === "SALIR") {
            break
        }
    }
    while (select === "sum"){
        let num1 = parseInt(prompt("digite el primer numero"))
        let num2 = parseInt(prompt("digite el segundo numero"))
        alert(`${num1} + ${num2} = ${num1+num2}`)
    
        let exit = prompt("si quiere dejar de sumar ponga (SALIR) sino ponga cualquier cosa").toLocaleUpperCase()
        if (exit === "SALIR") {
            break
        }
    }
}
