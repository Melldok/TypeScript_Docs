
# TypeScript Docs

### Archivo de configuracion

Creacion del archivo tsconfig : tsc --init
Aqui definimos todo lo que necesitamos de nuestra apliacion, podemos definir el nivel de estricto, el nivel de muestra de error, el objetivo, etc. 

### Modo observador 

Detecta los cambios introducidos en el codigo y lo traspila de forma automatica. (tsc --watch)

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