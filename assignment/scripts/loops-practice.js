console.log('****** Loops Practice *******');

// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i = 0; i < 4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
// answer: change the second expression, or condition (i is < 6).
console.log('count from 0 to 5');
for (let i = 0; i < 6; i++) {
  console.log(i);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
// answer: changed the first expression (set the a variable before the loop start) to your new starting point.
console.log('count from 3 to 5');
for (let i = 3; i < 6; i++) {
  console.log(i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
// answer: changed the third expression (how many time the value increase each time the block code in the loop is executed).
// in this exercise we will change the increment to increase by 2 ( i +=2)
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i = 2; i < 11; i += 2) {
  console.log(i);
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
// starts index at 5; if index is greater-than-or-equal to 0 then decrement the value by 1 and console log result of index
console.log('STRETCH: countdown from 5 to 0');
for (i = 5; i >= 0; i--) {
  console.log(i);
}

// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb'];

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
//for each index within the array(stars)list if the index is less than the length of the list, increment it by 1
//then console log the result of each star name in the array with text 'Some Stars:'

// for loop:
// for (i = 0; i < stars.length; i++) {
//   console.log('Some stars:', stars[i]);
// }

// for of loop:
for (let star of stars) {
  console.log('Some stars:', star);
};


// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
//create a new variable, star and set it to be set to 0/null/undefined/
//the code in while loop will run, over and over again, as long as a variable (star) is less than the total of elements in array (stars)
//if that condition is true, each time it run it will console log 'Some stars using while loops:' and the name of the star looped
let star = 0;
while (star < stars.length) {
  console.log('Some stars using while loops:', stars[star]);
  star++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
//declared a variable called count and assigned it to 0 number
//wrote a while loop to have it run over and over again as long as the 'count' variable is less than 6;
//each time it runs it will increment by 1
//if that condition is true, inside the block code we will console log the result of count
console.log('count from 0 to 5');
let count = 0;
while (count < 6) {
  console.log(count);
  count++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
//declared a variable called countDown assigned it to 10 (because that is our starting number)
//wrote a while loop and condition as: if countDown is less-than-or-equal to 5 then inside the block code
//execute or consol log the result of countDown; if the condition is true each time we run the code it will decrement by 1
console.log('count backwards from 10 to 5');
let countDown = 10;
while (countDown >= 5) {
  console.log(countDown);
  countDown--;
}
