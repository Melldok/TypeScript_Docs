(() => {

    type Avenger = {
        name: string,
        weapon: string,
    }

    const ironman: Avenger = {
        name: 'Tony Stark',
        weapon: 'Armorsuit'
    }
    const captainAmerica: Avenger = {
        name: 'Captain America',
        weapon: 'Shield'
    }
    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjlönir'
    }


    const avengers = [ ironman, thor, captainAmerica];

    for (const avenger of avengers) {
        console.log(`${avenger.name}, ${avenger.weapon}`)
    }





})()