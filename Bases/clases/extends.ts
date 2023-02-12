


(() => {
    class Avenger{
        constructor(
            public name: string,
            public realName: string,
        ){
           // console.log('Constructor Avenger llamado')
        }


        protected getFullname(){
            return `${this.name} ${this.realName}`
        }
    }

    // Si no existe un constructor en la extension de clase, TS automaticamente usara el de la clase inicial.

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            super(name, realName)
            //console.log('Constructor Xmen llamado')

            
        }

        get fullName(){
            return `${this.name} - ${this.realName} `;
        }

        set fullName(name: string){

            if(name.length < 3){
                throw new Error('El nombre debe ser mayor de 3 letras')
            }

            this.name = name;
        }

        getFullNameFromXmen(){
           //console.log( super.getFullname());
        }
    }


    const wolverine = new Xmen('Wolverine', 'Logan', true)

    

    wolverine.fullName = 'Paco'
    //console.log(wolverine.fullName);

    //wolverine.getFullNameFromXmen();
})()