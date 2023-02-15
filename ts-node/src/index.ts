// import { getPokemon } from './generics/get-pokemon';
import { Pokemon } from './decorators/pokemon';


// getPokemon(4)
//     .then(pokemon => console.log( pokemon.sprites.front_default))
//     .catch(error => console.log(error))
//     .finally(() => console.log('Fin de Get Pokemon'))




const charmander = new Pokemon('Charmander');

console.log(charmander)

