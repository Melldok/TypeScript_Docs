// import * as HeroClasses from './classes/Hero';
// import { powers } from './helpers/powers';
// const Hero = 123
// console.log('Alo');
// const ironMan = new HeroClasses.Hero('Tony Stark', 1, 55)
// console.log(ironMan)
// console.log(ironMan.power)


import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics';
import { Hero, Villain } from '../interfaces';


// printObject(123)
// printObject(new Date())
// printObject({ a: 1, b:2, c:3})
// printObject([1,2,3,4,5,6])
// printObject('Alo')

// const name: string = 'David'


// console.log(genericFunction(3.141661234213).toFixed(2))
// console.log(genericFunction(name).toUpperCase())
// console.log(genericFunctionArrow(name).toLocaleLowerCase())



const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Hero>(deadpool))