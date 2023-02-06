"use strict";
(() => {
    // Añadir parametros opcionales, que pueden o no venir.
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return (`${firstName} ${lastName || ''}`).toUpperCase();
        }
        else {
            return `${firstName} ${lastName || ''}`;
        }
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
