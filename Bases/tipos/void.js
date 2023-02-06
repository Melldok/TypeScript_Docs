"use strict";
(() => {
    function callBatman() {
        //return 1; //Error. Ya que deberia retornar void.
        return; //ok
    }
    const a = callBatman();
    console.log(a);
})();
