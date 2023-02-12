(() => {


    class Avenger {

        // Private significa que solo voy a tener acceso a esta propiedad dentro de la clase
        private name: string;
        private team: string;
        public realName?: string;
        static avgAge: number = 35;


        constructor( name: string, team: string, realName? : string ){
            this.name = name;
            this.team = team;
            this.realName = realName;
        }


    }

    const antman: Avenger = new Avenger('Antman', 'Captain', 'Scott Lang');
    //console.log(antman)


    // Forma corta de declaración

    class Avenger2 {
        
        static avgAge: number = 35;
        static getAvgAge(){
            return this.name
        }

        constructor( 
            private name: string, 
            private team: string, 
            public realName? : string,
            ){}

        bio(){
            return `${this.name} (${this.team})`
        }


    }

    const antman2: Avenger2 = new Avenger2('Antman', 'Captain', 'Scott Lang');
   // console.log(antman2)
    //console.log(antman2.bio())



})()