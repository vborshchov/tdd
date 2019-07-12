function Add(string) {
    if (/,\n/.test(string)) {
      throw ("Invalid input");
    }
    const numbers = string.split(/,|\n/) || [];

    return numbers
        .map(Number)
        .reduce((a, b) => a + b, 0)
}

module.exports = Add;
