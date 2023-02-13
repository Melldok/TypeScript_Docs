
// Se puede utilizar el constructor privado para controlar la manera en la que nuestras instancias son ejecutadas

(() => {

    class Apocalipsis{

        static instance:Apocalipsis;
                
        private constructor(public name: string){

        }

        static callApocalipsis(): Apocalipsis{
            // Principio singleton
            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis, el único.')
            }

            return Apocalipsis.instance;
        }

        changeName(newName:string):void{
            this.name = newName
        }
    }

   
    // const apocalipsis = new Apocalipsis('Soy Apocalipsis... el único')
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2... el único')
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el único')


    const apocalipsis1 = Apocalipsis.callApocalipsis()
    const apocalipsis2 = Apocalipsis.callApocalipsis()
    const apocalipsis3 = Apocalipsis.callApocalipsis()

    apocalipsis1.changeName('Xavier')


    //console.log({apocalipsis1, apocalipsis2, apocalipsis3})

})()