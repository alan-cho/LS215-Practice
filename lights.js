/*
Bank of switches numbered from 1 to n. Every switch is connected to a light that is initially off.
Go through the switches and toggle every nth switch on nth rotation.

Given n, return the switches that are 'on' after n repetitions.

Input: Integer
Output: Array

Explicit: 
  Given an integer that determines the amount of switches.
  Have to toggle the switch, on or off, when going over it.
  nth repetitions also means every nth switch is toggled.

Data Structure:
  Array
*/
function lights(n) {
  let lights = [];
  for (let cycle = 1; cycle <= n; cycle += 1) {
    for (let switchNum = cycle; switchNum <= n; switchNum += cycle) {
      if (lights.includes(switchNum)) {
        let index = lights.indexOf(switchNum);
        lights.splice(index, 1);
      } else {
        lights.push(switchNum);
      }
    }
  }
  return lights;
}

console.log(lights(5));
console.log(lights(100));
console.log(lights(1));
console.log(lights(2));
