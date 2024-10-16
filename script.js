/*Create a simple program that returns a price tag 
from the user, then give them a discount of 10 procent 

    Task: 

    1. Ask the user to enter a price tag using prompt(), for example: $49.99 

    2. Convert the input from string to number 

    3. Reduce the price by 10 procent 

    4. Print out the new price using console.log(), for example: 'New price: $44.99' 
*/


//Insert price tag
let priceTag = prompt("Enter a price. T.ex $30");

//convert the input in to a string
priceTag = parseFloat(priceTag.slice(1));

let discountPercent = "10";

//Calculate new price
let discountedPrice = priceTag - (priceTag * (discountPercent / 100))

//Print out
console.log(`Original Price ${priceTag}`);
console.log(`New Price is: ${discountedPrice}`);



