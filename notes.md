
# TypeScript Docs

### Archivo de configuracion

Creacion del archivo tsconfig : tsc --init
Aqui definimos todo lo que necesitamos de nuestra apliacion, podemos definir el nivel de estricto, el nivel de muestra de error, el objetivo, etc. 

### Modo observador 

Detecta los cambios introducidos en el codigo y lo traspila de forma automatica. (tsc --watch)

### Tipos de datos 

Interfaces :

Genericos :

Tuplas : 

### Tipado

En typescript podemos tipar o no los datos, lo cual nos ayuda mucho a la hora de desarrollar nuestro codigo. Las constantes vienen "Tipadas de serie" Porque en teoria no son mutables, mientras que las variables, cuando se inician, vienen definidas como "any", a no ser que las tipemos. 

```ts
    const a: number = 10;
    let b:number
    let c; //any

    b = 3.1416;

```