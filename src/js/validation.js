export default function isValid(value) {
  const cardDigits = Array.from(value.toString()).map((el) => +el);
  console.log(cardDigits);
  const length = cardDigits.length;
  console.log(length);
  const parity = length % 2;
  console.log(parity);
  let sum = 0;
  console.log(`${sum}`);
  for (let i = 1; i++; i < length) {
    console.log(i);
    if (i % 2 !== parity) {
      sum += cardDigits[i - 1];
    } else if (cardDigits[i - 1] > 4) {
      sum += 2 * cardDigits[i - 1] - 9;
    } else {
      sum += 2 * cardDigits[i - 1];
    }
  }
  console.log(sum);
  console.log(10 - (sum % 10));
  console.log(cardDigits[length - 1]);
  return cardDigits[length - 1] === 10 - (sum % 10);
}
