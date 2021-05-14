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

function getNameLength(name) {
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
}

