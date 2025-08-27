'user string';
let element = ['html', 'css', 'javascript', 'python'];
element.push('dom');

/*for (let i = element.length - 1; i >= 0; i--){
  console.log(element[i]); 
}*/
/*for (const obj of element) {
  console.log(obj);
}*/
let fruit = ['apple', 'banana', 'cherry', 'mango', 'orange'];
const result = fruit.filter(item => item.length < 7);
//console.log(result);
const fruitFound = fruit.filter(item =>  item.toLowerCase().includes('a')|| item.toLowerCase().includes('r'));
//console.log(fruitFound);
const fruits = fruit.filter(item => item.toLowerCase().startsWith('a') || item.toLowerCase().startsWith('b')|| item.toLowerCase().startsWith('c'));
//console.log(fruits);
/*fruit.forEach((a) => { console.log(a); });
fruit.forEach(fruits);
for (const item of fruit)
{
 console.log(item);
}*/ 
let number = [1, 3, 5, 55, 3, 7, 8, 3, 33, 12];
let sumOrOption = number.map(a => a + 2).map(a => a*2).filter(a => a>10);
//console.log(sumOrOption);
const num2 = number.filter(item => item >= 5);
//console.log(num2);
const num = number.filter(item => item > 4);
const numForEach = [];
number.forEach(a => { if (a > 4) { numForEach.push(a); }})
//console.log(numForEach);
const num3 = number.filter(item => { return item >= 5 });
//console.log(num3);
for (const a in number) { if (a > 9) console.log(a); }
let information = [
  {
    name: 'John',
    age: 30
    
  },
  {
    name: 'Jane',
    age: 25
  },
  {
    name: 'Jim', age: 35
  }
];
let ageSum = information.reduce((a, b) => a + b.age, 0);
//console.log(ageSum);
const ins2 = information.filter(num => num.name === 'jim');
//console.log(ins2);
let info = information.filter(op => op.age > 20);
//console.log(info);
let me = new Map([
  ['name', 'John'],
  ['age', 30],
  ['class', 'Math']
]);