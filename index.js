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

var s = window.screen;  //Переменная для выясняющая размер вашего экрана 
var width = q.width = s.width;
var height = q.height = s.height;
var letters = Array(256).join(1).split('');

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

var draw = function () {
  q.getContext('2d').fillStyle='rgba(0,0,0,.05)'; //Тут цвет фона
  q.getContext('2d').fillRect(0,0,width,height);
  q.getContext('2d').fillStyle='#0F0'; //Тут цвет букв
  letters.map(function(y_pos, index){
  text = String.fromCharCode(65+Math.random()*33);
  x_pos = index * 10;
  q.getContext('2d').fillText(text, x_pos, y_pos);
  letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
  });
};
setInterval(draw, 33);