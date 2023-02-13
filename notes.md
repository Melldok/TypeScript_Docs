
# TypeScript Docs

### Archivo de configuracion

Creacion del archivo tsconfig : tsc --init
Aqui definimos todo lo que necesitamos de nuestra apliacion, podemos definir el nivel de estricto, el nivel de muestra de error, el objetivo, etc. 


**Eliminar comentarios en la transpilación**

"removeComments" : true


**Incluir o Excluir archivos**

"exclude": [
    " xx "
]

"include": [
    " xx "
]

**outFile**

Los frameworks lo hacen de forma nativa. Lo usamos para juntar todos nuestros archivos en uno solo, reduciendo el caos. Se utiliza con "outFile": 

### Modo observador 

Detecta los cambios introducidos en el codigo y lo traspila de forma automatica. (tsc --watch)


### Depuración de código

Para conocer los errores que tenemos en las lineas concretas de nuestro codigo, deberemos hacer un cambio en el ts config. Concretamente tendremos que activar "SourceMap" : true. Esto mapeara nuestros errores. 



### Tipos de datos 

**Interfaces** :

**Genericos** :


**Void** : Es dato que no vale nada. Es una manera de decirle a TS que no hay una funcion de retorno. Se utiliza para documentar que mi funcion no retorna nada.

```ts

    function callBatman():void{
    //return 1; //Error. Ya que deberia retornar void.
    return //ok
    }

    const a = callBatman()
    console.log(a)

```

**Enumeraciones / Enums** : Se utiliza para trabajar con valores que tengan un sentido semántico visualmente fácil de leer. Por ejemplo un valor maximo y minimo. Son una forma de **manejar numeros** 

```ts
        enum AudioLevel{
        //Por defecto, cada numeración tendrá valor 0+X, a no ser que lo especifiquemos. 
        min = 1,
        medium,
        //medium2
        max = 10
        // Valores por defecto 0,1,2,3. 

    }   

    let currentAudio = AudioLevel.medium
```




**Tuplas / Tuple** : Es un array de elementos tipados. cada vez que haya que insertar un elemento se validará que dicho elemento coincida con el tipo de dato establecido en la tupla.

```ts
    let tupla: [string, number,string];
    tupla = ['España',10,'Madrid'];
    tupla = ['España',10]; //Error 
```

**Never** : Significa que mi funcion no debe terminar exitosamente.

```ts


    const error = (message:string):never => {

        throw new Error(message)
    }

    error('Auxilio!');

```


### Tipado

En typescript podemos tipar o no los datos, lo cual nos ayuda mucho a la hora de desarrollar nuestro codigo. Las constantes vienen "Tipadas de serie" Porque en teoria no son mutables, mientras que las variables, cuando se inician, vienen definidas como "any", a no ser que las tipemos. 

```ts
    const a: number = 10;
    let b:number
    let c; //any

    b = 3.1416;

```


### Funciones


REST: 

```ts

         // REST, Resto de argumentos. 

        const fullName = (firstName: string, ...restArgs: string[]): string => {
            return `${firstName} ${restArgs.join(' ')}`
        }
    
        const superman = fullName( 'Clark', 'Joseph', 'Kent')

        console.log({superman})

```


Tipando las funciones :

```ts

    const addNumbers = (a:number, b:number) =>  a + b;
    const greet = (name:string) =>  `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;

    //let myFunction; // El tipo de retorno es any
    //let myFunction: (y:number, z:number) => number ; // EL tipo de retorno es number

    let myFunction: (a: string) => string 

    // EL tipado se aplica incluso si definimos una funcion mediante otra

    myFunction = addNumbers
    console.log(myFunction(1,2))
   
    myFunction = greet
    console.log(myFunction('David'))
   
    myFunction = saveTheWorld
    console.log(myFunction())



```


### Objetos

**Tipado de objetos** 

Con la palabra reservada Type ( Sin contraparte JS ) podemos definir un tipo de objeto que hará las distintas comprobaciones sin tener que definir todos los tipos en cada creación de un objeto nuevo.

```ts   

        type Hero = {
        name: string;
        age? : number;
        powers: string[];
        getName?: () => string;
    }


     
    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    }

    let superman: Hero = {
        name: 'Clarck kent',
        age: 60,
        powers: ['Super Velocidad', 'Super Fuerza'],
        getName(){
            return this.name;
        }
    }


```

### Clases Abstractas

Sirven para crear otras clases o asegurarse de que otras clases implementen lo que se desea.

Tambien sirve para especificar que estoy esperando una clase/objeto/argumento que haya sido extendido de este tipo. 


### Interfaces 


Funcionan de manera similar a los tipos. La única diferencia es que los tipos no pueden extenderse pero las interfaces si. 


***Interfaces Anidadas***: 


```ts

     interface Client{
        name: string;
        age?: number;
        address: Address;
        getFullAddress?(id:string): void //Las interfaces no implementan metodos, solo los declaran. 
    }


    interface Address{
        id: number,
        zip: string;
        city: string;
    }


    const client: Client = {
        name: 'David',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },

        getFullAddress(id) {
            return this.address.city
        },
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address :  {
            id:  120,
            zip: 'K2S U2A',
            city: 'Toronto',
        }
    }
    
    

```