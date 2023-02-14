// import * as HeroClasses from './classes/Hero';
// import { powers } from './helpers/powers';
// const Hero = 123
// console.log('Alo');
// const ironMan = new HeroClasses.Hero('Tony Stark', 1, 55)
// console.log(ironMan)
// console.log(ironMan.power)


import { printObject, genericFunction } from './generics/generics';


printObject(123)
printObject(new Date())
printObject({ a: 1, b:2, c:3})
printObject([1,2,3,4,5,6])
printObject('Alo')


console.log(genericFunction(3.141661234213).toFixed(2))
console.log(genericFunction('Hello').toFixed(2))