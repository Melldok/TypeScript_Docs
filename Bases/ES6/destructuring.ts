(() => {


   type Avengers = {
      nick: string,
      ironman: string,
      vision: string,
      activo: boolean,
      poder: number
   }

   const avengers: Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paull Bettany',
    activo: true,
    poder: 1500
   }


   // const {poder, vision} = avengers
   // console.log(poder, vision.toUpperCase());


   const printAvenger = ({activo, ...resto} : Avengers) => {
      console.log({activo, resto})
   }

   // printAvenger(avengers)

   const avengersArr: string[] = ['Cap. América', 'Ironman', 'Hulk']
   const [ , second,] = avengersArr

   //console.log({second})
   
   const avengersArr2: [string, boolean, number] = ['Cap. América', true, 140]
   const [ capitan,ironman, esUnNumero] = avengersArr

   //console.log({ironman, capitan})


   

})()