const cardIIN = {
  "american-express": {
    reg: /^3[47]\d{13}$/,
  },
  "jcb": {
    reg: /^35((2[89])|([3-8]\d))\d{12,15}$/,
  },
  "mir": {
    reg: /^220[0-4]\d{12}$/,
  },
  "mastercard": {
    reg: /^(2((22[1-9])|(2[3-6]\d{2})|(27[0-1]\d)|(2720)))|(5[1-5]\d{2})\d{12}$/,
  },
  "visa": {
    reg: /^4((\d{12})|(\d{15,18}))$/,
  },
};

export default function isValid(value) {
  let type = undefined;
  const result = isCheckDigitRight(value);
  if (result) {
    for (let cardType in cardIIN) {
      if (value.toString().match(cardIIN[cardType].reg)) {
        return { result, type: cardType };
      }
    }
  }
  return { result, type };
}

function isCheckDigitRight(value) {
  const cardDigits = Array.from(value.toString()).map((el) => +el);
  const length = cardDigits.length;
  const parity = length % 2;
  let sum = 0;
  for (let i = 1; i < length; i++) {
    if (i % 2 === parity) {
      sum += sumDigit(cardDigits[i - 1]);
    } else {
      sum += sumDigit(2 * cardDigits[i - 1]);
    }
  }
  return cardDigits[length - 1] === (10 - (sum % 10)) % 10;
}

function sumDigit(value) {
  return Array.from(value.toString()).reduce((prev, el) => prev + +el, 0);
}
