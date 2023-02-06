(() => {


    // Las constantes siempre deben ser inicializadas. 

    let avenger: any = 123;
    let exists;
    let power;


    avenger = 'Dr Strange';
    // console.log(avenger.charAt(0))
    // Tratalo como string, pero no le cambies el type.
    console.log(( avenger as string).charAt(0))

    avenger = 140.2323;

    // Casteo para tratarlo como numero
    console.log(<number>avenger.toFixed(2))

    console.log(exists);
    console.log(power)

})()