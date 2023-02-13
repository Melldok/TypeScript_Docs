

(() => {

    interface Client{
        name: string;
        age?: number;
        address: Address;
        getFullAddress?(id:string): void //Las interfaces no implementan metodos, solo los declaran. 
    }


    interface Address{
        id: number,
        zip: string;
        city: string;
    }


    const client: Client = {
        name: 'David',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },

        getFullAddress(id) {
            return this.address.city
        },
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address :  {
            id:  120,
            zip: 'K2S U2A',
            city: 'Toronto',
        }
    }
    



})