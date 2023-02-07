"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clarck kent',
        age: 60,
        powers: ['Super Velocidad', 'Super Fuerza'],
        getName() {
            return this.name;
        }
    };
})();
