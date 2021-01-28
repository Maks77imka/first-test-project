// Get acces to form and text field where we are going to post answers.
const form = document.querySelector(".bot_forms form");
const botAnswer = document.querySelector("#answer");
const typeAnimation = "animate__bounceIn";
// Create data base object with key: value of answers.
let db = {
  "Что ты умеешь?": "На самом деле, немного, я - ранняя тестовая версия искуственного интелекта.\
  Посмотрите мой исходный код, чтобы узнать список вопросов, на которые я могу ответить",
  "Hi": "Hello",
  "What is your name?": "I'm Jarvis sir",
  "How are you?": "I'm fine. Thanks! How are you?",
  "I'm fine": "That's great!"
}

// Create function that delete our animation class.
function handleAnimationEnd() {
  botAnswer.classList.remove(typeAnimation);
}

// Create event for answering when we click "submit".
form.addEventListener("submit", (event) => {
  // preventDefault() delete standart page-reload when we "submit".
  event.preventDefault();
  const value = event.target.bottext.value;

  if (value) {
    const answer = db[value];

    if (answer !== undefined) {
      botAnswer.innerHTML = answer;
    } else {
      botAnswer.innerHTML = "I don't know it, Sir"
    }
    // add class with animation, when we get answer.
    botAnswer.classList.add(typeAnimation);
    // delete previos class with animation.
    botAnswer.addEventListener("animationend", handleAnimationEnd, { once: true });
  }
})
