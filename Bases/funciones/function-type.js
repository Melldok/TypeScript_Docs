"use strict";
(() => {
    // Tipando funciones
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;
    let myFunction; // El tipo de retorno es any
    //let myFunction: (y:number, z:number) => number ; // EL tipo de retorno es number
    //let myFunction: (a: string) => string 
    // let myFunction: () => string
    // EL tipado se aplica incluso si definimos una funcion mediante otra
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('David'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
