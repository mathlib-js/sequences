function* tribonacci(limit = 10) {
  let count = 0;
  let a = 0;
  let b = 0;
  let c = 1;

  if (isNaN(limit) || limit < 1) {
    throw new Error("Limit should be an integer greater than 0.")
  }

  while (count++ < limit) {
    yield a;
    [a, b, c] = [b, c, a + b + c];
  }
}

export default tribonacci;
