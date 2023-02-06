"use strict";
(() => {
    // Añadir parametros opcionales, que pueden o no venir.
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
