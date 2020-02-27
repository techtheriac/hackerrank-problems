function beautifulDays(i, j, k) {
  function reverseNumber(x) {
    return Number(
      `${x}`
        .split("")
        .reverse()
        .join("")
    );
  }

  let someDays = (i, j) => {
    let daysGenerated = [];

    for (let init = i; init <= j; init++) {
      daysGenerated.push(init);
    }

    return daysGenerated;
  };

  let numberOfDays = someDays(i, j)
    .map(x => {
      return Math.abs(reverseNumber(x) - x) / k;
    })
    .filter(x => Number.isInteger(x));

  return numberOfDays.length;
}
