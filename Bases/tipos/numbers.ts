(() => {
    let avengers: number = 10;

    console.log(avengers)

    const villians: number = 20;

    if(avengers < villians){
        console.log('We are in trouble')
    }else{
        console.log('Everything is ok')
    }
    
    // NaN es considerado numero 
    avengers = Number('55A');

    console.log({avengers})

})()