// Magic 8 ball
// Event Listeners
let questionE1 = document.getElementById("question");
let answerE1 = document.getElementById("answer");

// Button Event Listener
document.getElementById("magic8").addEventListener("click", magic8);

function magic8() {
  // generate a random number
  let randNum = Math.random() * 3;
  console.log(randNum);
  if (randNum < 0.5) {
    let answer = "Without a doubt";
    answerE1.innerHTML = answer;
  } else if (randNum < 1) {
    let answer = "As I see it, yes";
    answerE1.innerHTML = answer;
  } else if (randNum < 1.5) {
    let answer = "Concentrate and ask again.";
    answerE1.innerHTML = answer;
  } else if (randNum < 2) {
    let answer = "Don't count on it!";
    answerE1.innerHTML = answer;
  } else {
    let answer = "Outlook not so good";
    answerE1.innerHTML = answer;
    if (randNum < 0.5) {
      let questionE1 = nothing;
      answerE1.innerHTML = "Please ask a question!";
    } else if (randNum < 3) {
      let question = "Does a magic 8 ball actually work?";
      answerE1.innerHTML = "How dare you doubt me";
    } else {
      let question = "Is Javascript awesome?";
      answerE1.innerHTML = "Of course";
    }
  }
}
