function* factorial(limit = 10) {
  let count = 0;
  let fact = 1;

  if (isNaN(limit) || limit < 1) {
    throw new Error("Limit should be an integer greater than 0.")
  }

  while (count++ < limit) {
    yield fact;
    fact *= count;
  }
}

export default factorial;
