const input = require('readline-sync');
let candidateName = " ";


let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;
let total = 0;
let num = 0;




function askForName() {
let candidateName = input.question ("Please enter your name. ")
console.log (`Hello ${candidateName}!`)

return candidateName;
}

function askQuestion() {

let quizQues
 = ["Who was the first American woman in space? ", "True or false: 5000 meters = 5 kilometers? ", "Given the array 8, 'Orbit', 'Trajectory', 45, What is the entry at index 2? ", "What is the minimum crew size for International Space Station (ISS)? ",  
"(5+3)/2*10 = ? "];


let quizAns = 
 ["Sally Ride", "True", "Trajectory", "3","40"];



  for (let i = 0; i < quizQues.length; i++)
 { 
   let quizInput = input.question(quizQues[i]);
   console.log (`Your Answer: ${quizInput}`);
   
   
   if (quizInput.toUpperCase() === quizAns[i].toUpperCase()){
     
      total +=  num + 1;
      console.log("Your answer is correct! \n");
   }
   
     else {
        console.log("I'm sorry, your answer is incorrect. \n")
      
     }
   
   }
return quizQues;

}

function gradeQuiz(candidateAnswers) {

   let grade = (total/5)*100;
   console.log(grade + "%");


if (grade < 60){
     console.log("I'm sorry. You did not pass. ")
   }
else {
  console.log("Congratulations! You passed!");
}
 
return grade;
}

function runProgram() {
  askForName();
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}


module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};