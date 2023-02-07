(() => {

    type Hero = {
        name: string;
        age? : number;
        powers: string[];
        getName?: () => string;
    }


     
    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    }

    let superman: Hero = {
        name: 'Clarck kent',
        age: 60,
        powers: ['Super Velocidad', 'Super Fuerza'],
        getName(){
            return this.name;
        }
    }

  

})()