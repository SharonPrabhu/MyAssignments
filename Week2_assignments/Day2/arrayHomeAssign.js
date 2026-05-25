let arr = [23 ,'Johann' ,'Johanna', 21 ,8.5 , true]

arr.push(true); //  to add elements into an array
console.log("Push :" +arr)

arr.pop() // to remove the last element
console.log("Pop :" +arr)

arr.shift(); // to remove the first element
console.log("Shift :" +arr)

arr.unshift("Prabhu") // to add an element at the beginning
console.log("UnShift :" +arr) 

console.log("Includes Prabhu :" +arr.includes("Prabhu")) //  to check whether an element exists

console.log("indexOf Johann :" +arr.indexOf("Johann")) //  to find the position of an element

console.log("Join:", arr.join(" , ")); //  to convert array into string

console.log("Reverse:", arr.reverse()); // to reverse the array

console.log("Sort:", arr.sort()); // to sort the array into ascending order
