const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

exports.decode = function decode(expr) {
  let array = [];
  for (let i = 0; i < expr.length; i = i + 10) {
    array.push(expr.substr(i, 10));
  }
  const decodedArray = array.map((elem) => {
    if (elem.includes('*')) {
      return ' ';
    }
    let result = '';
    for (let i = 8; i >= 0; i = i - 2) {
      const char = elem.substr(i, 2);
      switch (char) {
        case '10':
          result = '.' + result;
          break;
        case '11':
          result = '-' + result;
          break;
        case '00':
          return result;
      }
    }
    return result;

  });
  return decodedArray.reduce((acc, elem) => {
    return acc + (elem === ' ' ? elem : MORSE_TABLE[elem]);
  }, '');
}
