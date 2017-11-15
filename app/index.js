// let a = [20, 30, 40];
// let b = [10, ...a, 50];
//
// console.log(b);

// function collect(...a) {
//   console.log(a);
// }
//
// collect(1, 2, 3, 4, 5);

// let z = [1, 2, 3];
//
// let [one, two] = z;
//
// console.log({one, two});
//
// console.log(two, typeof two);
// console.log(z);

// let animals = ["Karak", "Vahur", "Ficko"];
//
// let [fox, dog] = animals;
//
// console.log(fox, dog);
// let OldFox = {
//   name: "Karak",
//   mentoredYoung: 1,
// };

// ES5 way
// let name = OldFox.name;
// let mentoredYoung = OldFox.mentoredYoung;
// ES6 way
// let {name, mentoredYoung} = OldFox;
//
// console.log(name, mentoredYoung);
//
// let YoungFox = {name: "Vuk", parents: 0};
// let hero, parents;
// ({name, parents} = YoungFox); // won work throws error SyntaxError: Unexpected token because not in the same block-scope
// console.log(name, parents);

// var cheer = function() {
//   console.log("WooHooo!");
// }
//
// cheer.call();

// window.setTimeout(function() {
//   console.log("WooHoo!");
// }, 3000);

// window.setTimeout(() => {
//   console.log("WooHoo!");
// }, 3000);

// let cheer = () => {console.log("WooHoo");}
//
// cheer.call();

// let values = [20, 40, 50];
//
// let doubles = values.map((value) => value * 2);
//
// console.log(doubles);
//
// let points = [2, 34, 45, 14, 15, 6, 22];
//
// let highScores = points.filter((value) => value > 15 ? true : false);
//
// console.log(highScores);

// let b = `Woh${"oo".repeat(50)}`;
//
// console.log(b);
//
// console.log("Butterfly".startsWith("Butter"));
// console.log("Butterfly".endsWith("fly"));
// console.log("Butterfly".includes("notinthere"));

// const addToCart = (item, number) => {
//   return Number.isSafeInteger(number);
// }
//
// console.log(addToCart('widger', Math.pow(2, 500)));

// import {gatVedelem, total} from './gatvedelem';
//
// console.log(gatVedelem[2], total);
// class Animal {
//   constructor(name, height) {
//     this.name = name;
//     this.height = height;
//   }
//
//   hello() {
//     console.log(`I'm ${this.name} from the Animal Kingdom!`);
//   }
//
// }
//
// let king = new Animal("Mufasa", 4.5);
//
// king.hello();
//
// console.log(king);

// Generators vs Iterators
// Custom iterator
// const arrayIterator = (array) => {
//   let index = 0;
//
//   return {
//     next: () => {
//       if(index < array.length) {
//         let next = array[index];
//         index += 1;
//         return next;
//       }
//     }
//   };
//
// }
//
// let it = arrayIterator([1, 2, 3]);
//
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// function* arrayIterator() {
//   for(let arg of arguments) {
//     yield arg;
//   }
// }

// function* arrayIterator() {
//   yield* arguments;
// }
//
//
// let it = arrayIterator(1, 2, 3);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);

// Promises
// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Resolved promise'), 10000);
// });
//
// myPromise.then(response => console.log(response))
//   .catch(error => console.log(error));

// Fetch API
// const route = 'http://jsonplaceholder.typicode.com/posts/1';
//
// fetch(route, {method: "GET"})
//   .then(response => response.json())
//   .then(json => console.log(json));

// es2016
// let a = 2**5; // -> Math.pow(2, 5);
// console.log(a);
//
// let isAcomie = ["Che Guevara", "Vladimir Iljich Lenin", "Joseph Stalin"].includes("Che Guevara");
// console.log(isAcomie);

// es2017
// let obj = {a: 'one', b: 'two', c: 'three'};
// let keys = Object.keys(obj); // ES2015
// // added in ES2017
// let values = Object.values(obj);
// let entries = Object.entries(obj);
//
// console.log(keys);
// console.log(values);
// console.log(entries);
//
// // use case for entries
// for (let entry of entries) {
//   console.log(`key: ${entry[0]}, value: ${entry[1]}`);
// }

// Async / await
// async function asyncOne() {
//   return "One";
// }
//
// async function asyncTwo() {
//   return "Two";
// }
//
// async function asyncThree() {
//   const one = await asyncOne();
//   console.log(one);
//   const two = await asyncTwo();
//   console.log(two);
// }
//
// async function asyncFour() {
//   const [resOne, resTwo] = await Promise.all(
//     [asyncOne(), asyncTwo()]
//   );
//
//   console.log(resOne, resTwo);
// }

// asyncFour();

// REACT Book explorer
import React from 'react';
import ReactDOM from 'react-dom';

import Global from './components/Global';

ReactDOM.render(
  <Global />, document.getElementById('root')
);
