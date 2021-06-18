//===========MODUL_1=============
//===========Task 10===========
/*function makeMessage (name, price) {
  // Change code below this line
   const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
  
  makeMessage('Radar', 6150);
  makeMessage('Scanner', 3500);
  makeMessage('Reactor', 8000);
  makeMessage('Engine', 4070);
};

//===========Task 11===========

function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity*pricePerItem;

  // Change code above this line
  return totalPrice;
  
  calculateTotalPrice(5, 100);
  calculateTotalPrice(8, 60);
  calculateTotalPrice(3, 400);
  calculateTotalPrice(1, 3500);
  calculateTotalPrice(12, 70);
};

//===========Task 12===========

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  
const message = `You ordered droids worth ${orderedQuantity*pricePerDroid+deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`
  // Change code above this line
  return message;
  
  makeOrderMessage(2, 100, 50);
  makeOrderMessage(4, 300, 100);
  makeOrderMessage(10, 70, 200);
 
}

//===========Task 13===========

function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  // Change code above this line
  return passed;
  isAdult(20);
  isAdult(14);
  isAdult(8);
  isAdult(37);
}

//===========Task 14===========

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = password === 'jqueryismyjam';

  // Change code above this line
  return isMatch;
  isValidPassword("mangodab3st");
  isValidPassword("kiwirul3z");
  isValidPassword("jqueryismyjam");
  
}

//===========Task 15===========

function checkAge(age) {
  let message;

  if (age >= 18) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

//===========Task 16===========

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (ordered >= available) {
    message = 'Not enough goods in stock!';
  } else {
    message = 'Order is processed, our manager will contact you.';
  }
  // Change code above this line
  return message;
}

//===========Task 17===========

let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

//===========Task 18===========
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = `Insufficient funds!`;
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits -= totalPrice} credits left`;
  }
  // Change code above this line
  return message;
}

//===========Task 19===========
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Change this line
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

//===========Task 20===========
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (ordered === 0) { 
    message =  'There are no products in the order!';
  } else if (ordered > available) { 
    message = 'Your order is too large, there are not enough items in stock!';
  } else {
    message = 'The order is accepted, our manager will contact you';
  }

  // Change code above this line
  return message;
}

//===========Task 21===========
function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // Change this line

  return isInRange;
}

//===========Task 22===========
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

  return canAccessContent;
}

//===========Task 23===========

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}

//===========Task 24===========
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  if (totalSpent >= 50000) {
  discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
  discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
  discount = BRONZE_DISCOUNT;
  } 
  else {
  discount = BASE_DISCOUNT; 
  }
 
  // Change code above this line
  return discount;
}

//===========Task 25===========
function checkStorage(available, ordered) {
  let message;
  // Change code below this line

 message = available >= ordered ? "The order is accepted, our manager will contact you" : "Not enough goods in stock!";
  
  

  // Change code above this line
  return message;
}

//===========Task 26===========
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
  message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"; 

  // Change code above this line
  return message;
}

//===========Task 27===========
function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case "starter": // Change this line
      price = 0; // Change this line
      break;

    case "professional": // Change this line
      price = 20; // Change this line
      break;

    case "organization": // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}

//===========Task 28===========
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
  
  switch (password) {
    case null:
     message = "Canceled by user!";
      break;
      
     case ADMIN_PASSWORD:
     message = "Welcome!";
      break; 
     
    default: 
     message = "Access denied, wrong password!"; 
      
  }

  //===========Task 29===========

  function getShippingCost(country) {
  let message;
  // Change code below this line
  let price;
switch (country) {
    case "China":
    price = 100;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
      
    case "Chile":
    price = 250;
    message = `Shipping to ${country} will cost ${price} credits`;
    break; 
    
    case "Australia":
    price = 170;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
    
    case "Jamaica":
    price = 120;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
     
    default: 
    message = "Sorry, there is no delivery to your country"; 
}
    
  // Change code above this line
  return message;
}*/

//===========Task 30===========

/*function getNameLength(name) {
  let length;
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}


//===========Task 31===========
const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic [courseTopic.length - 1];

// Change code above this line

//===========Task 32===========
function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line


  return substring;
}


//===========Task 33===========
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  result = message.length > maxLength ? message.slice(0, maxLength) + "..." : message;

  /// Change code above this line
  return result;
}

//===========Task 34===========
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}
//===========Task 35===========
function checkForName(fullName, name) {
 const result = fullName.includes(name); // Change this line
  return result;
}
//===========Task 36===========
function checkForSpam(message) {
  let result;
  // Change code below this line
message = message.toLowerCase();
  result = message.includes('spam') || message.includes('sale');
  
  // Change code above this line
  return result;
}*/


//===========MODUL_2=============

//===========Task 1===========

/*function checkAge(age) {
  if (age >= 18) {
    return "You are an adult";
  }

  return "You are a minor";
}*/

//===========Task 2===========

/*function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  


  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }

  return "Access denied, wrong password!";
 
}

checkPassword("mangohackzor");
checkPassword("polyhax");
checkPassword("jqueryismyjam");


//===========Task 3===========


function checkStorage(available, ordered) {
  
  if (ordered <= available) {
    return "The order is accepted, our manager will contact you";
  }  
  if (ordered === 0) {
    return "Your order is empty!";
  } 
  
  return "Your order is too large, not enough goods in stock!";
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));

  
 
//===========Task 4===========
const fruits = ["apple", "plum", "pear", "orange"];
console.log(fruits);


//===========Task 5===========

const fruits = ["apple", "plum", "pear", "orange"];

const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];*/

//===========Task 6===========
/*const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
fruits[1] = "peach";
fruits[3] = "banana";

console.log(fruits);*/

//===========Task 7===========
/*const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const fruitsArrayLength = fruits.length;

console.log(fruitsArrayLength);

//===========Task 8===========

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

//===========Task 9===========

function getExtremeElements(array) {
  // Change code below this line
  
 const firstElement = array[0];
 const lastElementIndex = array.length - 1;
 const lastElement = array[lastElementIndex];
  
  return array = [firstElement, lastElement];

  // Change code above this line
}*/

//===========Task 10===========

/*function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
words = message.split(delimeter);
  // Change code above this line
  return words;
}
console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", "_"));

//===========Task 11===========

function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line

  
message = message.split(" ").length;
  
const totalPrice = message * pricePerWord;
  
  return totalPrice;
  
   // Change code above this line
}

//===========Task 12===========
function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line

string = array.join(delimeter);

  // Change code above this line
  return string;
}

//===========Task 13===========

function slugify(title) {
  // Change code below this line

slug = title.toLowerCase().split(" ").join("-");
  
  return slug;

  // Change code above this line
}

//===========Task 14===========

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(-3);

//===========Task 15===========

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); */


//===========Task 16===========

/*function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line

  const array = firstArray.concat(secondArray);
  const arrayLength = array.length;
  
  if (arrayLength > maxLength) {
    return array.slice(0, maxLength);
  }
  
  return array;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));

//===========Task 17===========
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Change this line
  console.log(i);
}

//===========Task 18===========
function calculateTotal(number) {
 // Change code below this line

  let total = 0;
  
  for (let i = 1; i <= number; i += 1) { 
  total += i; 
}
  
return total;

  
}

//===========Task 19===========

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

//===========Task 20===========

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (const item of order) {
total += item;
}
  
  // Change code above this line
  return total;
}

//===========Task 21===========

function findLongestWord(string) {
  // Change code below this line
  const arrayString = string.split(" ");
 let longestWord = arrayString[0];
  for (let i = 0; i < arrayString.length; i += 1) {
  if (longestWord.length < arrayString[i].length) {
  longestWord = arrayString[i];
  }
  }
  return longestWord;
  // Change code above this line
}

//===========Task 22===========

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
for (let i = min; i <= max; i += 1) { // Change this line
  numbers.push(i);
}
  // Change code above this line
  return numbers;
}

//===========Task 23===========

function filterArray(numbers, value) {
   // Change code below this line

  const result = [];
  
  for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > value) {
  result.push(numbers[i]);
  }
  }
  
  return result;
  // Change code above this line
}

//===========Task 24===========
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}

//===========Task 25===========

function getCommonElements(array1, array2) {
  // Change code below this line
const uniqieElements = [];
  
  for (const element of array1) {
  if (array2.includes(element)) {
  uniqieElements.push(element);
  }
  }

return uniqieElements;
 // Change code above this line
}

//===========Task 26===========

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (const item of order) {
    total += item;
  }

  // Change code above this line
  return total;
}

//===========Task 27===========

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (const number of numbers) {
    

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

//===========Task 28===========

const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;

//===========Task 29===========

function getEvenNumbers(start, end) {
   // Change code below this line

const newArray = [];
  
  for (let i = start; i <= end; i += 1) {
if (i % 2 === 0) {

 newArray.push(i); 
}
}

  return newArray;
    // Change code above this line
}*/

//===========Task 30===========

/*const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    
   break; 
  }
}
console.log(number);

//===========Task 31===========

function findNumber(start, end, divisor) {
  // Change code below this line
  

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      
     return i;  
    }
  }
}


//===========Task 32===========

function includes(array, value) {
  // Change code below this line
for (let i = 0; i < array.length; i += 1) {
if (array[i] === value) {

  return true;
}
}
 return false; 
  // Change code above this line
}*/


//===========MODUL 3===========

//===========Task 1===========

/*const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

console.log(apartment);

//===========Task 2===========

const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    }
};
  
//===========Task 3===========

const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city centre',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  
  // Change code below this line
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  // Change code above this line

  //===========Task 4===========

  const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Change code above this line

//===========Task 5===========

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// Change code below this line
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];
// Change code above this line

//===========Task 6===========

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};

// Change code below this line
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");

//===========Task 7===========

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};

// Change code below this line

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
country: "Jamaica",
city: "Kingston",   
};

//===========Task 8===========

const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  // Change code below this line
name,
price,
image,  
tags

  // Change code above this line
};

//===========Task 9===========

const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Change code below this line
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam"
  
  
  // Change code above this line
};

//===========Task 10===========

const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
keys.push(key);
values.push(apartment[key])
}

//===========Task 11===========

const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Spacious apartment in the city centre';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if (apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key]);
  
}

  // Change code above this line
}


//===========Task 12===========

function countProps(object) {
  let propCount = 0;
  // Change code below this line
  
  for (const obj in object) {
if (object.hasOwnProperty(obj)) {

  propCount += 1;
}
  }
  // Change code above this line
  return propCount;
}

//===========Task 13===========

const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);

for (const key of keys) {
values.push(apartment[key]);
}

//===========Task 14===========

function countProps(object) {
  // Change code below this line
  let propCount = 0;
  
  const keys = Object.keys(object);

  for (const key of keys) {
      propCount += 1;
    }
  

  return propCount;
  // Change code above this line
}

//===========Task 15===========
const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);

//===========Task 16===========
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
const values = Object.values(salaries);
  
  for (const value of values) {
  totalSalary += value;
  }
  // Change code above this line
  return totalSalary;
}*/

//===========Task 17===========

/*const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];
const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
hexColors.push(color.hex);
rgbColors.push(color.rgb);  
};

console.log(hexColors);
console.log(rgbColors);


//===========Task 18===========

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  
  for (const product of products) {
    
  if (productName === product.name) {
  return product.price;
  } 
    
  }
  return null;
  
  // Change code above this line
}

//===========Task 19===========

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  
  const array = [];
 
  for (const product of products) {
  if (product.hasOwnProperty(propName)) {
  
  array.push(product[propName]);
  }
  }
  
  return array;
  
  
  // Change code above this line
}*/

//===========Task 20===========

/*const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let totalPrice = 0;
  
 for (const product of products) {
    
  if (productName === product.name) {
  
  totalPrice = product.price * product.quantity
  }
 }

return totalPrice;
  // Пиши код выше этой строки
}

//===========Task 21===========

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const { yesterday, today, tomorrow } = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

//===========Task 22===========

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

//===========Task 23===========

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const { yesterday: highYesterday,
     today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

//===========Task 24===========

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const { hex, rgb } of colors) {
  
  hexColors.push(hex);
  rgbColors.push(rgb);
}

//===========Task 25===========

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

const {
  today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
  tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, } = forecast;

  //===========Task 26===========

  // Change code below this line
function calculateMeanTemperature(forecast) {
  const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh }, } = forecast;

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

//===========Task 27===========
const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

//===========Task 28===========

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

//===========Task 29===========
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = { ...defaultSettings, ...overrideSettings };

//===========Task 30===========

function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  // Change code below this line
const newData = {completed, category, priority, ...data};
  
  return newData; 
  // Change code above this line
}

//===========Task 31===========

// Change code below this line
function add(...args) {
  let value = 0;
  for (arg of args) {
  value += arg;
  }
  
  return value;
  // Change code above this line
}

//===========Task 32===========

// Change code below this line
function addOverNum(value, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > value) {
    total += arg;
  }
  }

  return total;
  // Change code above this line
}

//===========Task 33===========

// Change code below this line
function findMatches(...args) {
  const matches = []; // Don't change this line

  // Change code above this line
  
  for (let i = 1; i < args.length; i += 1) {
    if (args[0].includes(args[i])) {
    
    matches.push(args[i]);
    }
  
  }
  return matches;
}

//===========Task 34===========

const bookShelf = {
  // Change code below this line
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
  return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
  return `Updating book ${oldName} to ${newName}`;
  },
  // Change code above this line
};

//===========Task 35===========
const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
  const bookIndex = this.books.indexOf(oldName);
  this.books.splice(bookIndex, 1, newName);
  return bookShelf.updateBook;
    // Change code above this line
  },
};

//===========Task 36===========

const atTheOldToad = {
  // Change code below this line
potions: [],
  // Change code above this line
};

//===========Task 37===========

const atTheOldToad = {
  // Change code below this line
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  getPotions() {
    return this.potions;
  },
  // Change code above this line
};

//===========Task 38===========
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    // Change code below this line
    this.potions.push(potionName);
    // Change code above this line
  },
};

//===========Task 39===========

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
   const potionIndex = this.potions.indexOf(potionName);
    return this.potions.splice(potionIndex, 1);
    // Change code above this line
  },
};

//===========Task 40===========

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line
 const potionIndex = this.potions.indexOf(oldName);
  return this.potions.splice(potionIndex, 1, newName);
    // Change code above this line
  },
};*/

//===========Task 41===========

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    const { potions } = this;
    const { name } = potionName;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === name) {
        return `Potion ${name} is already equipped!`;
      }
      potions.push(potionName);
    }
  },
  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === potionName) {
        potions.splice(i, 1);
        return potions;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === oldName) {
        potions[i].name = newName;
        return potions;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};


//===========MODUL 4===========
//===========Task 1===========

function makePizza() {
  return 'Ваша пицца готовится, ожидайте.';
}
// Пиши код ниже этой строки

const result = makePizza('Ваша пицца готовится, ожидайте.');
const pointer = makePizza;

//===========Task 2===========

function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

// Пиши код ниже этой строки
function makeMessage(pizzaName, callback) {

  return callback(pizzaName);

}

//===========Task 3===========

function makePizza(pizzaName, callback) {
  console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
  callback(pizzaName);
}

makePizza('Роял гранд', function deliverPizza(pizzaName) {
  console.log(`Доставляем пиццу ${pizzaName}.`);
});
// Пиши код ниже этой строки

makePizza('Ультрасыр', function eatPizza(pizzaName) {
  console.log(`Едим пиццу ${pizzaName}.`);
});

//===========Task 4===========

const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName, onSuccess, onError) {

    if (this.pizzas.includes(pizzaName)) {

      return onSuccess(pizzaName);
    }

    return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);

  },
};
// Пиши код выше этой строки

// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
pizzaPalace.order('Биг майк', makePizza, onOrderError);
pizzaPalace.order('Венская', makePizza, onOrderError);

//===========Task 5===========

const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  // Пиши код ниже этой строки
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `В ассортименте нет пиццы с названием «${pizzaName}».`;
    }

    return `Заказ принят, готовим пиццу «${pizzaName}».`;
  },
  // Пиши код выше этой строки
};

//===========Task 6===========
const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Пиши код ниже этой строки
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Пиши код выше этой строки
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

//===========Task 7===========

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = [];

for (let i = 0; i < orders.length; i += 1) {
  messages.push(composeMessage.call(orders[i], i + 1));
}

//===========Task 8===========

const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = [];
for (let i = 0; i < orders.length; i++) {
  const msg = composeMessage.apply(orders[i], [i + 1]);
  messages.push(msg);
}

//===========Task 9===========
const pizzaPalace = {
  company: 'Pizza Palace',
};

const burgerShack = {
  company: 'Burger Shack',
};

function composeMessage(customerName) {
  return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}
// Пиши код ниже этой строки

const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

const burgerShackComposer = composeMessage.bind(burgerShack);
const burgerShackMessage = burgerShackComposer('Поли');

//===========Task 10===========

const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

//===========MODUL 5===========
//===========Task 1===========
const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const child = Object.create(parent);

// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;

//===========Task 2===========
const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

// Пиши код выше этой строки

//===========Task 3===========
function Car(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const audi = new Car('Audi', 'Q3', 36000);
console.log(audi);

const bmw = new Car('BMW', 'X5', 58900);
console.log(bmw);

const nissan = new Car('Nissan', 'Murano', 31700);
console.log(nissan);

//===========Task 4===========

function Car({brand, model, price}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

//===========Task 5===========

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Car.prototype.getPrice = function () {
  return this.price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

//===========Task 6===========
function Storage(items) {
  this.items = items;
}

Storage.prototype.getItems = function () {
  return this.items;
};

Storage.prototype.addItem = function (newItem) {
  return this.items.push(newItem);
};

Storage.prototype.removeItem = function (item) {
  return this.items.splice(this.items.indexOf(item),1);
};


// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

//===========Task 7===========

function StringBuilder(baseValue) {
  this.value = baseValue;
}

StringBuilder.prototype.getValue = function () {
  return this.value;
};

StringBuilder.prototype.padEnd = function (str) {
  return this.value += str;
};

StringBuilder.prototype.padStart = function (str) {
  return this.value = str + this.value;
};

StringBuilder.prototype.padBoth = function (str) {
  return this.value = str + this.value + str;
};


// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

//===========Task 8===========

class Car { }

//===========Task 9===========

class Car {
brand;
model;
price;
  
constructor({ brand, model, price }) {
    // Инициализация объявленных свойств
    this.brand = brand;
    this.model = model;
    this.price = price;
  }  
}

//===========Task 10===========

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  
  getPrice() {
  return this.price;
  }
  
  changePrice(newPrice) {
  this.price = newPrice;
  }
}

//===========Task 11===========

class Car {
  #brand;
  
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  
 getBrand() {
 return this.#brand;
 } 
  
 changeBrand(newBrand) {
 this.#brand = newBrand;
 }
}

//===========Task 12===========

class Storage {
  #items;
  
   constructor(items) {
    this.#items = items;
  }
  
 getItems() {
  return this.#items;
}

addItem(newItem) {
  this.#items.push(newItem);
}

removeItem(item) {
  const itemIndex = this.#items.indexOf(item);
  this.#items.splice(itemIndex, 1);
}
}


// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

//===========Task 13===========

class StringBuilder {
  #value;
  
  constructor(baseValue) {
    this.#value = baseValue;
  }
  
 getValue() {
  return this.#value;
}

padEnd(str) {
  this.#value += str;
}

padStart(str) {
  this.#value = str + this.#value;
}

padBoth(str) {
  this.padStart(str);
  this.padEnd(str);
}
 
}


// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

//===========Task 14===========

class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}

//===========Task 15===========

class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (Car.MAX_PRICE >= newPrice) {
    this.#price = newPrice;
  }
    return this.#price;
    
  }
  // Пиши код выше этой строки
}

const audi = new Car({price: 35000});
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

//===========Task 16===========

class Car {
  static #MAX_PRICE = 50000;
  // Пиши код ниже этой строки
static checkPrice(price) {
if (price > Car.#MAX_PRICE) {
return 'Внимание! Цена превышает допустимую.';
}
 return 'Всё хорошо, цена в порядке.'; 
}
  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

//===========Task 17===========

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Пиши код ниже этой строки
class Admin extends User {

  static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
}

//===========Task 18===========

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки
  accessLevel;
  constructor({ email, accessLevel }) {
   
    super(email);
    this.accessLevel = accessLevel;
  }

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser

//===========Task 19===========
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки
  
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  accessLevel;
  blacklistedEmails;

  constructor({ email, accessLevel, blacklistedEmails = [] }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = blacklistedEmails;
  }
  
  blacklist(email) {
  this.blacklistedEmails.push(email);
  }
  
  isBlacklisted(email) {
  return this.blacklistedEmails.includes(email);
  }

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true 


//===========MODUL 6===========
//===========Task 1===========

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки
  
  orderedItems.forEach(orderedItems => {
    totalPrice += orderedItems;
    
  });                   

  

  // Пиши код выше этой строки
  return totalPrice;
}

//===========Task 2===========

function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
  
  numbers.forEach(number => {
  if (number > value) {
    filteredNumbers.push(number);
  }
  });
  
    
  
    // Пиши код выше этой строки
    return filteredNumbers;
}
  
//===========Task 3===========

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
  
  firstArray.forEach(element => {
  if (secondArray.includes(element)) {
  commonElements.push(element);
  }
  })
  
    return commonElements;
    // Пиши код выше этой строки
}
  
//===========Task 4===========

// Пиши код ниже этой строки

const calculateTotalPrice = (quantity, pricePerItem) => {
return quantity * pricePerItem;
};

//===========Task 5===========

// Пиши код ниже этой строки

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem; 


// Пиши код выше этой строки

//===========Task 6===========

// Пиши код ниже этой строки
const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;
  
 orderedItems.forEach(item => totalPrice += item);
  
return totalPrice;
};
// Пиши код выше этой строки

//===========Task 7===========

// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
const filteredNumbers = [];
  
  numbers.forEach(number => {
  if (number > value) {
    filteredNumbers.push(number);
  }
  });
  
return filteredNumbers;  
}


//===========Task 8===========

// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
const commonElements = [];
  
firstArray.forEach(element => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });  

return commonElements;
}

//===========Task 9===========

function changeEven(numbers, value) {
    // Пиши код ниже этой строки
  const newNumbers = [];
  
  numbers.forEach(number => {
  if (number % 2 === 0) {
  newNumbers.push(number + value);
  } else if (number % 2 !== 0) {
  newNumbers.push(number);
  }
  });
  
   return newNumbers;
    // Пиши код выше этой строки
}
  
//===========Task 10===========

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => planet.length);

//===========Task 11===========

const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
const titles = books.map(book => book.title);
  
//===========Task 12===========

const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];
  // Пиши код ниже этой строки
  
const genres = books.flatMap((book) => book.genres);
  
//===========Task 13===========

// Пиши код ниже этой строки
const getUserNames = users => {
   return users.map(user => user.name); 

  };
  // Пиши код выше этой строки

  //===========Task 14===========

  // Пиши код ниже этой строки
const getUserEmails = users => {
  return users.map(user => user.email);  

  };
  // Пиши код выше этой строки

  //===========Task 15===========

  const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

//===========Task 16===========

const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  // Пиши код ниже этой строки
  const allGenres = books.flatMap(book => book.genres);
  const uniqueGenres = allGenres.filter(
    (value, index, array) => array.indexOf(value) === index);
  
    //===========Task 17===========

    const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);

//===========Task 18===========

// Пиши код ниже этой строки
const getUsersWithEyeColor = (users, color) => {
 return users.filter((user) => user.eyeColor === color);

};
// Пиши код выше этой строки

//===========Task 19===========

// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => {
 return users.filter((user) => user.age >= minAge && user.age <= maxAge);

};
// Пиши код выше этой строки

//===========Task 20===========

// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName)); 
};
// Пиши код выше этой строки

//===========Task 21===========

// Пиши код ниже этой строки
const getFriends = (users) => {
return users.flatMap((user) => user.friends).filter((value, index, array) => array.indexOf(value) === index); 
   
};
// Пиши код выше этой строки

//===========Task 22===========

// Пиши код ниже этой строки
const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive === true); 
};
// Пиши код выше этой строки

//===========Task 23===========

// Пиши код ниже этой строки
const getInactiveUsers = (users) => {
  return users.filter((user) => user.isActive !== true); 
};
// Пиши код выше этой строки

//===========Task 24===========

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);

//===========Task 25===========

// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email); 
};
// Пиши код выше этой строки

//===========Task 26===========

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

//===========Task 27===========

// Пиши код ниже этой строки
const isEveryUserActive = (users) => {
 return users.every((user) => user.isActive === true);   
};
// Пиши код выше этой строки

//===========Task 28===========

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);

//===========Task 29===========

// Пиши код ниже этой строки
const isAnyUserActive = users => {
  return users.some((user) => user.isActive === true);    
};
// Пиши код выше этой строки

//===========Task 30===========

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;

//===========Task 31===========

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce((total, player) => {
  return total + (player.playtime / player.gamesPlayed);
}, 0);

//===========Task 32===========

// Пиши код ниже этой строки
const calculateTotalBalance = users => {
  return users.reduce((total, user) => {
  return total + user.balance;
}, 0); 
};
// Пиши код выше этой строки

//===========Task 33===========

// Пиши код ниже этой строки
const getTotalFriendCount = users => {
  return users.reduce((total, user) => {
  return total + user.friends.length;
}, 0); 
}; 

// Пиши код выше этой строки

//===========Task 34===========

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

//===========Task 35===========

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

//===========Task 36===========

const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
  const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
  
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
  
//===========Task 37===========
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));

const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

//===========Task 38===========

// Пиши код ниже этой строки
const sortByAscendingBalance = users => {
  return users.sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
};
// Пиши код выше этой строки

//===========Task 39===========

// Пиши код ниже этой строки
const sortByDescendingFriendCount = users => {
  return [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length); 
};
// Пиши код выше этой строки

//===========Task 40===========

// Пиши код ниже этой строки
const sortByName = users => {
  return [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name)); 
};
// Пиши код выше этой строки

//===========Task 41===========

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = [...books].filter((book) => book.rating > MIN_BOOK_RATING).map((book) => book.author).sort((a, b) => a.localeCompare(b));

//===========Task 42===========

// Пиши код ниже этой строки
const getNamesSortedByFriendCount = users => {
  return [...users].sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length).map((user) => user.name);
};
// Пиши код выше этой строки

//===========Task 43===========

// Пиши код ниже этой строки
const getSortedFriends = users => {
  return users.flatMap((user) => user.friends).filter((value, index, array) => array.indexOf(value) === index).sort((firstFriend, secondFriend) => firstFriend.localeCompare(secondFriend));   
};
// Пиши код выше этой строки

//===========Task 44===========

// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
  return [...users].filter((user) => user.gender === gender).reduce((total, user) => total + user.balance, 0); 
};
// Пиши код выше этой строки