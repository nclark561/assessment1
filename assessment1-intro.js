// ***** Variable ***** //
/* 
    Create a few variables that store a value of string, number, and boolean. Choose your own topic.
*/

//CODE HERE
let str = 'hi';
let nm = 6;
let bool = true;

// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguages' that include 4 coding language of your choice. 
*/

//CODE HERE
let codingLanguages = ['javascript', 'java', 'python', 'html'];

/* 
    Access the 3rd element of the 'codingLanguages' array.
*/

//CODE HERE
console.log(codingLanguages[2]);

/*
    Copy the array using one of the arrays built in functions, and call it 'codingLanguage2.'
*/

//CODE HERE
let codingLanguages2 = codingLanguages.slice(0, codingLanguages.length);
console.log(codingLanguages2);

/* 
    Add another coding language to the codingLanguage2 array.
*/

//CODE HERE
codingLanguages2.push('ruby');
console.log(codingLanguages2);

// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the instruments array.
*/

//CODE HERE
instruments.pop();
console.log(instruments);

/* 
    Use a built-in array function to remove 'piano' from the instruments array
*/

//CODE HERE
instruments.shift();
console.log(instruments);

/* 
    Use a built-in array function to add 'guitar' to the front of the instruments array
*/

//CODE HERE
instruments.unshift('guitar');
console.log(instruments);

/* 
    Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

//CODE HERE
instruments.splice(2, 1, 'glockenspiel');
console.log(instruments);

// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/

// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

//CODE HERE
if (num % 2 === 0) {
    console.log(num);
} else {
    console.log(num + ' is not an even number.');
};

// !!! Don't edit the code below !!! //
let score = 83;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

//CODE HERE
if (score <= 10) {
    console.log('Failed.');
} else if (score > 10 && score < 41) {
    console.log('The grade is C.');
} else if (score > 40 && score < 71) {
    console.log('The grade is B.');
} else if (score > 70) {
    console.log('The grade is an A.');
};


// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

//CODE HERE
let ttlPrc = 0;

for (let i = 0; i < price.length; i++) {
    ttlPrc += price[i];
};

console.log(ttlPrc);

/* 
    Using the 'totalPrice,' find the average of 'price.'
*/

console.log(`The average price is ${ttlPrc / price.length}.`);

// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

// CODE HERE
for (let i = 0; i < colors.length; i++) {
    switch (colors[i]) {
        case 'red':
            console.log('apple');
            break;
        case 'green':
            console.log('melon');
            break;
        case 'yellow':
            console.log('banana');
            break;
        default:
            console.log('We dont have any fruit in that color');
    };
};


// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- planning
    -- Analysis of Requirements
    -- Design
    -- Implementation
    -- Testing & Integration
    -- Maintain
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git: a software that allows version control and backup of code
        -- github: a website meant for storing snapshots of our code
        -- git init: add a git file to a folder allowing git to track files
        -- git clone: clones a repository
        -- git status: allows you to view how files being tracked by git have (or havent) been modifies and are ready for a commit
        -- git add: prepares files to be committed to a snapshot 
        -- git commit: stores a snapshot of a file along with a message explaining whats new with said file
        -- git push: adds your commits to github
    - How to push git to github
*/
