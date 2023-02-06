

(() => {

    const hero:string = 'Flash'

    function returnName():string{
        return hero
    }


    const activateBatSignal = ():string => {
        return 'Batsignal Activated!'
    }

    console.log(typeof activateBatSignal)

    const heroName = returnName()


})()
