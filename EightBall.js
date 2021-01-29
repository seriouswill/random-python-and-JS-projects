let userName = "Will";
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
let userQuestion = "Am I going to be a brilliant coder?";
console.log(`${userName} asks the EightBall, ${userQuestion}`);
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
if (randomNumber === 0) {
  eightBall = 'It is certain.'
} else if (randomNumber === 1) {
  eightBall = 'Probs not.'
} else if (randomNumber === 2) {
  eightBall = 'Fuck yeah.' 
} else if (randomNumber === 3) {
  eightBall = 'Fuck no.'
} else if (randomNumber === 4) {
  eightBall = 'Nah mofo.'
} else if (randomNumber === 5) {
  eightBall = 'Sure fucking thing'
} else if (randomNumber === 6) {
  eightBall = ('Outlook not so good.')
} else if (randomNumber === 7) {
  eightBall = ('The spirits say yes!')
}
console.log(eightBall);

