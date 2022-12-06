# <span style="color:#66b2ff">Anton Popov</span>

## <span style="color:#66b2ff">Contact information</span>

- Phone:     **+48500560146**
- Telegram: **@WidthDoctor**
- Discord:    **WidthDoctor#7110**

## <span style="color:#66b2ff">About Myself</span>

I did a lot of things: I was a guitar teacher in a music school, and when it began to get bored I tried my hand at door and furniture restoration. I had incredible success and now my wife and I moved to Poland, where I worked as an assistant arborist and now I work as a carwash worker.

Before that I was already on the RS School course in 2020 and reached the interview with the mentor, but unfortunately my life changed drastically and there were big changes and I was not able to continue my studies. I never lost interest in this occupation and continued to study on my own when I had time.

I really hope nothing happens anytime soon and I can do what I really enjoy!

## <span style="color:#66b2ff">Skills</span>

- HTML
- CSS
- FIGMA
- VS Code
- JavaScript Basics
- Deepl :)
- Adobe Photoshop
- Git

## <span style="color:#66b2ff">Code example</span>

>[task link](https://www.codewars.com/kata/526a569ca578d7e6e300034e "GO!")

My solution is:

```
const convert = (input, source, target) => {
  let decimalValue = input.split('').reduce((acc, cur, i) => {
    return acc + (source.indexOf(cur) * (source.length ** (input.length - 1 - i)));
  }, 0);

  let result = [];
  let value = 0;

  do {
    value = decimalValue % target.length;
    decimalValue = Math.floor(decimalValue / target.length);
    result.push(target[value]);
  }
  while (decimalValue > 0);

  return result.reverse().join('');
};


var Alphabet = {
  BINARY: '01',
  OCTAL: '01234567',
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
let bin = Alphabet.BINARY, oct = Alphabet.OCTAL, dec = Alphabet.DECIMAL, hex = Alphabet.HEXA_DECIMAL,
  allow = Alphabet.ALPHA_LOWER, alup = Alphabet.ALPHA_UPPER, alpha = Alphabet.ALPHA, alnum = Alphabet.ALPHA_NUMERIC;
2 years agoRefactorDiscuss
```

## <span style="color:#66b2ff">Experience</span>

- 2020 - RS Schools Course «JavaScript/Front-end not completed.
- [https://restavracija.by/ ](https://restavracija.by/ "GO!")
  > _At the request of a colleague it was necessary to make a site exactly on the basis of the website builder, where he is used to work. Much of what was in the design did not work. (The design was made by my wife :\* ) Old site [https://rsr.by/](https://rsr.by/ "GO!") (**see at your own risk**)_

## <span style="color:#66b2ff">languages</span>

- English A2+
- Polish - Basic
- Russian
- Belarusian
