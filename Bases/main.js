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
(() => {
    class Mutant {
        ;
        mutantPower(id) {
            return this.name + '' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'David',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 120,
            zip: 'K2S U2A',
            city: 'Toronto',
        }
    };
});
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
});
//# sourceMappingURL=main.js.map