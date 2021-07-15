// 1. Create a multidimensional array to hold quiz questions and answers
let questions = [
  ['What is the name of our planet?', ['PLANET EARTH', 'EARTH']],
  ['What solar system do we live in?', ['MILKY WAY']],
  ['What is the name of our main star?', ['SUN']],
  ['What is the average time it take to travel from planet earth to the moon?', ['3 DAYS', 'THREE DAYS']]
];

// 2. Store the number of questions answered correctly
let correct = 0;
function askQuestions(questionSet) {
// console.log("Hallelujah!");
//  3. Use a loop to cycle through each question
//   - Present each question to the user
  for (let i = 0; i < questionSet.length; i++) {
    let userAnswer = prompt(questionSet[i][0]).toUpperCase();
//   - Compare the user's response to answer in the array
//   - If the response matches the answer, the number of correctly
//     answered questions increments by 1
    if (questionSet[i][1].includes(userAnswer)) {
      correct++;
    }
}
}
askQuestions(questions);
// askQuestions(questions2);
// 4. Display the number of correct answers to the user
document.querySelector("main").innerHTML=`<h1>You got ${correct} correct.</h1>`;