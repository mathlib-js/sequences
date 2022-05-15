function* fibonacci(limit = 10) {
  let count = 0;
  let a = 0;
  let b = 1;

  if (isNaN(limit) || limit < 1) {
    throw new Error("Limit should be an integer greater than 0.")
  }

  while (count++ < limit) {
    yield a;
    [a, b] = [b, a + b];
  }
}

export default fibonacci;
