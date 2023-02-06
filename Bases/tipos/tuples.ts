(() => {

    // Definiendo la tupla, el primer dato simpre va a ser un string y el segundo dato siempre va a ser un numero
    let hero: [string, number, boolean] = ['Dr Strange', 100]

    hero[0] = 12 //Error
    hero[0] = 'Ironman' //ok

    hero = ['Wonder Woman', 25, true]
    

})()