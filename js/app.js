// const bassGuitar = {
//     make: 'Fender',
//     model: 'Precision Bass',
//     year: 1972,
//     color: 'sunburst'
//     playBassline: function() {
//         return 'ba-doon doon doon...'
//     }
// };
/* 
const person = {
    name: 'Tyler',
    occupation: 'valet',
    hometown: 'Yonkers New York',
    speak: function() {
        console.log('Hello')
    },
    numberOfDogs: 3
};

console.log('person.name', person.name);
console.log('person.occupation', person.occupation);
person.speak();

console.log('person["name"]:', person["name"]);
console.log('person[\'name\']:', person['name']);

const personProperty = 'numberOfDogs';

console.log(person[personProperty]);

person.lastForBreakfast = 'pho ga noodle soup';
person["currentTime"] = '1:40 am';

console.log('person:', person);
 */

 const fridge = {
     make: 'LG',
     finish: 'Stainless Steel',
     orientation: 'Freezer on top',
     iceMaker: true,
     waterDispenser: false,
     contents: {
         condiments: [
             'mustard',
             'mayo',
             'hot sauce'
         ],
         liquids: [
             'water',
             'milk',
             'juice'
         ]
     },
     greeting: function() {
         return 'Hello! I turned the light on for you!'
     }
 }

 console.log(fridge);

 /////////////////////////////////////////////

 let groceryList = ['eggs', 'spinach', 'cheese'];
 groceryList.push('apple');

 console.log('groceryList:', groceryList);

 ///////////////////
 ///////////////////

 const dog = {
     name: 'Milo',
     age: 1,
     breed: 'Australian Cattle Dog',
     isHungry: false,
     isSleepy: false,
     goOnWalk: function() {
         dog.isSleepy = true;
         dog.isHungry = true;
     },
     eat: function() {
         dog.isHungry = false;
     },
     sleep: function() {
         dog.isSleepy = false;
     },
     getStatus: function () {
         return {
             isHungry: dog.isHungry,
             isSleepy: dog.isSleepy
         }
     }
 };

 console.log('dog:', dog);

 /////////////////////////
 /////////////////////////

function getRandomNumber() {
    return Math.floor((Math.random() * 30) + 1);
}

 const storeFront = {
    numOfShirts: 60,
    showAmount: function() {
        return storeFront.numOfShirts;
    }
 };

 const storage = {
     numOfShirts: 2000,
     showAmount: function() {
         return storage.numOfShirts;
     }
 };

 const shopOwner = {
     putShirtsInStorage: function(amountToStore) {
        storeFront.numOfShirts -= amountToStore;
        storage.numOfShirts += amountToStore;
     },
     getShirtsFromStorage: function(amountToGet) {
         storage.numOfShirts -= amountToGet;
         storeFront.numOfShirts =+ amountToGet;
     },
     getInventory: function() {
         const numOfShirtsInStoreFront = storeFront.showAmount();
         const numOfShirtInStorage = storage.showAmount();

         console.log(numOfShirtsInStoreFront, numOfShirtInStorage);
     },
     getRandomNumOfShirts: function() {
         // get random number between 1 and 30
        const randomNum = getRandomNumber();
         // call getShirtsFromStorage passing in random number
        shopOwner.getShirtsFromStorage(randomNum);
        return randomNum;
     }
 };

shopOwner.getInventory();
shopOwner.getShirtsFromStorage(30);
shopOwner.getInventory();

console.log(shopOwner.getRandomNumOfShirts());

shopOwner.getInventory();
 
// console.log(storeFront.showAmount());
// console.log(storage.showAmount());

// console.log(shopOwner.getShirtsFromStorage(30));

// console.log(storeFront.showAmount());
// console.log(storage.showAmount());