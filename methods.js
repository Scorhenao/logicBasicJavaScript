/**foreach no retorna nada */
list = ["hola", "nose"];

personas = [
    {
        name: "torrenegra",
        phone: 2193239123
    },
    {
        name: "antony",
        phone: 91919323210303
    }
];

console.log("solo los elementos del array");
list.forEach((iterador) => {
    console.log(iterador)
});/**solo los elementos del array */

console.log("los elementos y la posicion");
list.forEach((iterador,index) => {
    console.log(iterador,index)
});/**los elementos y la posicion */

/**aunque se cambie el nombre de la lista sigue ocupando el mismo espacio de memoria */
list.forEach((iterador,index, lista2) => {
    console.log(iterador,index)
    if (iterador == "hola") {
        // console.log(iterador,index);
        lista2[index] = "x"
    }
});/**recorrer pero mostrar datos concretos */

console.log(list);

/**recorrer objeto y cambiar un valor*/
personas.forEach((persona, index) =>{
    if (index == 0) {
        personas[index]["phone"] = 123
    }
});

console.log(personas);

/**map retorna nueva lista independiente*/
listNum = [0,1,2,3,4,5,6];

console.log("pares con MAP de una array en otro nuevo")
listPar = listNum.map((num)=>{
    let pares = num%2 === 0
    if (pares) {
        return num
    }else{
        return ""
    }
});

console.log(listPar);

/**filter retorna nueva lista indepentiende y se le pone que agregar a esta*/

console.log("pares con FILTER de una array en otro nuevo")
listPar2 = listNum.filter((num)=>{
    return num%2 == 0
    //retorna true lo almacena, si retorna false no
});

console.log(listPar2);

/**reduce retorna nueva lista y acumula */
console.log("con reduce multiplica todo 2 y acumulalo")
resultadosReduce = listNum.reduce((acum,iterador)=>{
    console.log(iterador)
    return acum + (iterador*2)
    //acum empieza en la posicion 0
    //lo que retorna lo agrega en redultadosReduce
});

console.log(resultadosReduce);

