

export const printObject = (argument: any) => {
    console.log(argument)
}


//La funcion recibe es de tipo generioc, recibe ese mismo tipo generico y genera ese tipo generico por tanto solo podremos usar metodos de numeros en numeros o de strings en strings
export function genericFunction<T>(argument: T): T{
    return argument;
}


export const genericFunctionArrow = <T>(argument: T) => argument;