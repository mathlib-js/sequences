# @mathlib/sequences
### Mathematical sequence generator
## Installation
```
npm install @mathlib/sequences
```

## Usage
```javascript
const sequences = require("@mathlib/sequences");

const fibonacciGenerator = sequences.fibonacci(5);
console.log([...fibonacciGenerator]); // 0, 1, 1, 2, 3

const infiniteFibonacciGenerator = sequences.fibonacci(Infinity);
for (let val of infiniteFibonacciGenerator) {
  console.log(val); // 0, 1, 1, 2, 3, ..., 55, 89, 144
  // Break when you have enough values
  if (val > 100) break;
}
```

Using ES6 imports
```javascript
import { fibonacci } from "@mathlib/sequences";

console.log([...fibonacci(5)]); // 0, 1, 1, 2, 3

for (let val of fibonacci(Infinity)) {
  console.log(val); // 0, 1, 1, 2, 3, ..., 55, 89, 144
  // Break when you have enough values
  if (val > 100) break;
}
```
