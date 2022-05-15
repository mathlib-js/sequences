function* whole(limit = 10) {
  let count = 0;

  if (isNaN(limit) || limit < 1) {
    throw new Error("Limit should be an integer greater than 0.")
  }

  while (count < limit) {
    yield count++;
  }
}

export default whole;
