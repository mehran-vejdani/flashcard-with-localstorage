const cards = document.querySelector(".cards");
const createBox = document.querySelector(".create-box");
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");

//buttons
const newBtn = document.querySelector(".new");
const delBtn = document.querySelector(".delete");
const saveBtn = document.querySelector(".save");
const closeBtn = document.querySelector(".close");

let contentArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

contentArray.forEach((item) => {
  let divBox = document.createElement("div");
  divBox.className = "flashcard";
  let h2question = document.createElement("h2");
  h2question.className = "flashcardQuestion";
  let h2answer = document.createElement("h2");
  h2answer.className = "flashcardAnswer";

  h2question.innerHTML = item.my_question;
  h2answer.innerHTML = item.my_answer;
  divBox.appendChild(h2question);
  divBox.appendChild(h2answer);
  cards.appendChild(divBox);

  divBox.addEventListener("click", function () {
    if (h2answer.style.display == "none") {
      h2answer.style.display = "block";
    } else {
      h2answer.style.display = "none";
    }
    cards.appendChild(divBox);
  });
});

saveBtn.addEventListener("click", () => {
  let flashcard_info = {
    my_question: question.value,
    my_answer: answer.value,
  };

  contentArray.push(flashcard_info);

  localStorage.setItem("items", JSON.stringify(contentArray));
  contentArray[contentArray.length - 1];
  question.value = "";
  answer.value = "";
});

delBtn.addEventListener("click", () => {
  localStorage.clear();
  contentArray = [];
  cards.innerHTML = "";
});

closeBtn.addEventListener("click", () => {
  createBox.style.display = "none";
});

newBtn.addEventListener("click", () => {
  createBox.style.display = "block";
});
