#!/usr/bin/env node
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
import name from '../scr/cli.js';
console.log('Answer "yes" if the number is even, otherwise answer "no".')

function main () {
    function getRandomInt(max) {
        return Math.floor(Math.random() *  max + 1);
    }
        let number = getRandomInt(99)
        console.log('Question:'+ number)
        const answer = readlineSync.question('Your answer:').toLocaleLowerCase().trim()
        
        const CorrectAnswer = number % 2 === 0 ? 'yes' : 'no';
        if (answer === CorrectAnswer) {
        console.log('Correct!')
        return true;
    } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${CorrectAnswer}'. \n Let's try again, ${name}!`)
     return false;
    }
}
let i = 0;
while (i <= 2) {
    if (main()) {
    i += 1;
    if (i === 3) {
        console.log(`Congratulations, ${name}!`);
    i = 4
    }
    } else {
        i = 3;
    }
} 
