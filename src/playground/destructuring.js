const person = {
    age: 44,
    location: {
        city: 'Carignan',
        temp: 16
    }
};

// const name = person.name;
// const age = person.age;

// const { name: fullname = 'Anonymous', age} = person;

// console.log(`${ fullname } is ${age}`);

// const { temp: temperature, city } = person.location;

// if ( temperature && city ) {
//     console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
//     title: 'ABC',
//     author: 'Fred Bouchard',
//     publisher: {
//         name: 'Google'
//     }
// }


// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


const address = [
    '2972 Des Galets', 'Carignan', 'Quebec', 'J3L 0V2'
];

const [street, city, state = 'Quebec', zip] = address;



console.log(`You are in ${city}, ${state}, your address is ${street} and your ${zip}.`);

const item = ['Coffe (hot)', 2.00, 2.50, 2.75, '$'];

const [itemName, , medium, ,symbol] = item;

console.log(`A medium ${itemName} is ${symbol}${medium.toFixed(2)}`);
