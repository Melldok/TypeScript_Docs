"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatSignal = () => {
        return 'Batsignal Activated!';
    };
    console.log(typeof activateBatSignal);
    const heroName = returnName();
})();
