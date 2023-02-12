(() => {



    abstract class Mutante{
        constructor(
            public name: string,
            public realName: string,
        ){}
    }

    const wolverine = new Mutante('Wolverine', 'Logan');



})()