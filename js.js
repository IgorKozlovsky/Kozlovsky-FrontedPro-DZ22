// Додати кожне запитання до елемента ul у вигляді чекбокс і текст запитання.

// По натисканню на кнопку "Перевірити" вивести повідомлення про кількість правильних відповідей і загальну кількість питань (наприклад "Your result is 3/4").

// Програма має працювати для довільної кількості запитань. Це означає, що запитання мають додаватися з коду

const questions = [
  {
    caption: "Подія натискання на елемент називається click?",
    correctAnswer: true,
  },
  {
    caption: "Усередині розмітки не можна додати обробник події?",
    correctAnswer: false,
  },
  {
    caption: "Припинити спливання події можна за допомогою метода stopImmediatePropagation?",
    correctAnswer: false,
  },
  {
    caption: "Припинити спливання події можна за допомогою метода stopPropagation?",
    correctAnswer: true,
  },
];
const questionsDOM = document.querySelector(".questions");

questions.forEach(({ caption }) => {
  const label = document.createElement("label");
  label.textContent = caption;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const li = document.createElement("li");
  questionsDOM.append(li);
  li.append(checkbox, label);
});

const inputs = document.querySelectorAll("input");

const submitButton = document.querySelector(".check");
submitButton.addEventListener("click", () => {
  let res = 0;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked === questions[i].correctAnswer) res++;
  }
  console.log(`Your result is ${res}/${inputs.length}`);
});
