function changeSize() {
  document.getElementById('date').style.height = 350 +'px';
}

/*let condition = 10;
let condition2;
switch (condition) {
  case 13:
    condition2 = 'it is a big number';
    break;
  case 10:
    condition2 = 'it is a equal number';
    break;
  default:
    con2 = 'not tobe undentiey';
}
console.log(condition2);*/
let obj1 = ['A', 'B', 'C', 'D', 'E', 'F'];
/*for (let i of obj1) { console.log(i); };*/

/*obj1.forEach(function (a) {
  console.log(a);
});*/
/*for (let obj2 = 0; obj2 < obj1.length ; obj2++){
  console.log(obj1[obj2]);
}*/

let valu = {
  name: 'A',
  age: 30,
  profession: 'Engineer',
}

/*for (let i in valu) {
  let Upper = i.charAt(0).toUpperCase() + i.slice(1);
  console.log(Upper + ': ' + valu[i]);
};*/

/*let apple = 10;
while (apple >=0) {
  console.log(apple);
  apple = apple - 2;
}*/

/*let property = prompt('choose option (easy, medium, hard)').toLowerCase();
console.log(property);

function guess(property) {
  let low =0;
  let max;
  let randomNumber;
  let range;

  switch (property) {
    case 'easy':
      range = 10;
      max = 5;
      randomNumber = Math.floor(Math.random() * 10 + 1);
      console.log(randomNumber);
      break;
    case 'medium':
      
      range = 50;
      max = 7;
      randomNumber = Math.floor(Math.random() * 50 + 1);
      console.log(randomNumber);
      break;
    case 'hard':
      range = 100;
      max = 9;
      randomNumber = Math.floor(Math.random() * 100 + 1);
      console.log(randomNumber);
      break;
    default:
      console.error('choose properly');
  };
  while (low < max) {
    let guess = parseInt(prompt(`guess a number between 1 and ${range}you have ${max - low}`
    )
      );
    low++;
    console.log(guess);
  };
}
guess(property);*/
/*'use strict';
let num = prompt('enter a num');
function cal(num) {
  return num * num
};
cal(num);
console.log(cal(num));*/

let give = prompt('number please');

/*function calculation(input) {
  return input * input;
}

function cal(input) {
  let num = {};
  if (input in num) {
    let calFirst = num[input];
    console.log(`already have: ${calFirst}`);

  } else {
    let calSecond = calculation(input);
    console.log(`calculation: ${calSecond}`);

  }
}
cal(input);*/