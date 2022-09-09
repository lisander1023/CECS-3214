var questionNumber = 0;
var score = 0;
var selectedChoices = ['', '', '', '', '', '', '', '', '', '']

var questions = [
{
'question': 'Inside which HTML element do we put the JavaScript?',
'choiceA': '<js>',
'choiceB': '<script>',
'choiceC': '<scripting>',
'choiceD': '<javascript>',
'correct': 'choiceB'
},
{
'question': 'What does CSS stand for?',
'choiceA': 'Central Style Sheets',
'choiceB': 'Cascading Style Sheets',
'choiceC': 'Cascading Simple Sheets',
'choiceD': 'Cars SUVs Sailboats',
'correct': 'choiceB'
},
{
'question': 'What year was JavaScript launched?',
'choiceA': '1996',
'choiceB': '1995',
'choiceC': '1994',
'choiceD': 'none of the above',
'correct': 'choiceB'
},
{
'question': 'Where is the correct place to insert a JavaScript?',
'choiceA': '<script src="xxx.js">',
'choiceB': '<script name="xxx.js">',
'choiceC': '<script href="xxx.js">',
'choiceD': 'All of these',
'correct': 'choiceA'
},
{
'question': 'What is the full form of HTML ?',
'choiceA': 'Hyper text markup language',
'choiceB': 'Hyper transform mark linguist',
'choiceC': 'Homo text mark language',
'choiceD': 'All of these',
'correct': 'choiceA'
},
{
'question': 'How do you create a function in JavaScript?',
'choiceA': 'function:myFunction()',
'choiceB': 'function myFunction()',
'choiceC': 'function = myFunction()',
'choiceD': 'All of these',
'correct': 'choiceB'
},
{
'question': 'How do you call a function named "myFunction"?"',
'choiceA': 'call function',
'choiceB': 'myFunction()',
'choiceC': 'call myFunction()',
'choiceD': 'All of these',
'correct': 'choiceB'
},
{
'question': 'How to write an IF statement in JavaScript?',
'choiceA': 'if i = 5 then',
'choiceB': 'if (i==5)',
'choiceC': 'if i = 5',
'choiceD': 'All of these',
'correct': 'choiceB'
},
{
'question': 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
'choiceA': 'if (i != 5)',
'choiceB': 'if i =! 5 then',
'choiceC': 'if (i <> 5)',
'choiceD': 'if i <> 5',
'correct': 'choiceA'
},
{
'question': 'What is a variable?',
'choiceA': 'Container for a piece of data',
'choiceB': 'Local and global',
'choiceC': 'a function',
'choiceD': 'none of the above',
'correct': 'choiceA'
}
]
function next(event) {
event.preventDefault();
questionNumber++;
clearChoices();
getQuestion();
}
function init() {
getQuestion();
document.getElementById('choices').addEventListener('click', function (event) {
const radioButtons = document.querySelectorAll('input[name="choices"]');
let selectedValue;
for (const radioButton of radioButtons) {
if (radioButton.checked) {
selectedValue = radioButton.value;
break;
}
}
selectedChoices[questionNumber] = selectedValue;
calculateScore();
});

}

init();

function getQuestion() {
if (questionNumber >= questions.length) {
const btn = document.getElementsByClassName('btn')[0];
btn.style.display = "none";
return;
}
const qNumber = document.getElementById('qNumber');
qNumber.innerText = "Question: " + (questionNumber + 1);

document.getElementById("question").innerText = questions[questionNumber]["question"];
document.getElementById("choice-A").innerText = questions[questionNumber]["choiceA"];
document.getElementById("choice-B").innerText = questions[questionNumber]["choiceB"];
document.getElementById("choice-C").innerText = questions[questionNumber]["choiceC"];
document.getElementById("choice-D").innerText = questions[questionNumber]["choiceD"];
}

function clearChoices() {
const radioButtons = document.querySelectorAll('input[name="choices"]');
for (const radioButton of radioButtons) {
radioButton.checked = false;
}
}

function calculateScore() {
score = 0;
for (var i = 0; i < questions.length; i++) {
if (questions[i].correct === selectedChoices[i])
score++;
}
const scoreDisplay = document.querySelector('#results > p');
scoreDisplay.innerText = 'Total Correct Answers: ' + score;
}