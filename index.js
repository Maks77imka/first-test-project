const form = document.querySelector(".bot_forms form");
const botAnswer = document.querySelector("#answer");
const typeAnimation = "animate__bounceIn";

let db = {
  "Что ты умеешь?": "На самом деле, немного, я - ранняя тестовая версия искуственного интелекта",
  "Hi": "Hello",
  "What is your name?": "I'm Jarvis sir",
  "How are you?": "I'm fine. Thanks! How are you?",
  "I'm fine": "That's great!"
}

function handleAnimationEnd() {
  botAnswer.classList.remove(typeAnimation);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = event.target.bottext.value;

  if (value) {
    const answer = db[value];

    if (answer !== undefined) {
      botAnswer.innerHTML = answer;
    } else {
      botAnswer.innerHTML = "I don't know it, Sir"
    }

    botAnswer.classList.add(typeAnimation);
    botAnswer.addEventListener("animationend", handleAnimationEnd, {once: true});
  }
})
