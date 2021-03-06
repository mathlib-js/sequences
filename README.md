# @mathlib/sequences
Mathematical sequence generator

[![Build & Test](https://github.com/mathlib-js/sequences/actions/workflows/node.js.yml/badge.svg)](https://github.com/mathlib-js/sequences/actions/workflows/node.js.yml)

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

## Available Sequences
| OEIS Link | Sequence ▼ | Generator | Parameters |
| --- | --- | --- | --- |
| [A000142](https://oeis.org/A000142) | Factorials | `factorial(limit)` | limit (Default 10) |
| [A000045](https://oeis.org/A000045) | Fibonacci Series | `fibonacci(limit)` | limit (Default 10) |
| [A000124](https://oeis.org/A000124) | Lazy Caterer's Sequence <br> (Central Polygonal Numbers) | `lazyCaterers(limit)` | limit (Default 10) |
| [A000032](https://oeis.org/A000032) | Lucas Numbers | `lucas(limit)` | limit (Default 10) |
| [A000027](https://oeis.org/A000027) | Natural Numbers | `natural(limit)` | limit (Default 10) |
| [A000129](https://oeis.org/A000129) | Pell Numbers | `pell(limit)` | limit (Default 10) |
| [A000073](https://oeis.org/A000073) | Tribonacci Series | `tribonacci(limit)` | limit (Default 10) |
| [A001477](https://oeis.org/A001477) | Whole Numbers | `whole(limit)` | limit (Default 10) |
