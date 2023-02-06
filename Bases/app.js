"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    let villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let heroeFuerza;
    (function (heroeFuerza) {
        heroeFuerza[heroeFuerza["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        heroeFuerza[heroeFuerza["fuerzaBatman"] = 1] = "fuerzaBatman";
        heroeFuerza[heroeFuerza["fuerzaFlash"] = 5] = "fuerzaFlash";
        heroeFuerza[heroeFuerza["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(heroeFuerza || (heroeFuerza = {}));
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
