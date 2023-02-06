"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        //Por defecto, cada numeración tendrá valor n+X, a no ser que lo especifiquemos. 
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        //medium2
        AudioLevel[AudioLevel["max"] = 10] = "max";
        // Valores por defecto 0,1,2,3
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
});
